const CACHE_NAME = 'encryption-hub-cache-v2';
const RUNTIME_CACHE = 'encryption-hub-runtime-v2';

// IMPORTANT: Use './' for relative paths because of the GitHub Pages subpath
const urlsToCache = [
  './',              // The main index.html
  './index.html',
  './page1.html',    // Encryption 1.0
  './page2.html',    // Encryption 2.0 (Steganography)
  './page3.html',    // Encryption 3.0 (File Encryption)
  './page4.html',    // Encryption 4.0 (PDF Export)
  './page5.html',    // Encryption 5.0 (Password Generation)
  './manifest.json', // Your PWA manifest
  './logo/icon.png'  // Your application icon (adjust path if needed)
];

// External resources to cache for offline support
const externalResources = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'
];

// --- INSTALL EVENT: Cache essential assets ---
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Service Worker: Caching App Shell for offline use');
          return cache.addAll(urlsToCache);
        }),
      caches.open(RUNTIME_CACHE)
        .then(cache => {
          console.log('Service Worker: Caching external resources for offline use');
          // Use no-cors mode for external resources to avoid CORS issues
          return Promise.allSettled(
            externalResources.map(url => 
              fetch(url, { mode: 'no-cors' })
                .then(response => cache.put(url, response))
                .catch(err => console.log('Failed to cache:', url, err))
            )
          );
        })
    ]).then(() => self.skipWaiting())
  );
});

// --- ACTIVATE EVENT: Clear old caches ---
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) 
  );
});

// --- FETCH EVENT: Serve content from cache first, with runtime caching fallback ---
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Service Worker: Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request because it can only be used once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone the response because it can only be used once
            const responseToCache = response.clone();

            // Cache external resources and same-origin resources for offline use
            const url = event.request.url;
            if (url.includes('googleapis.com') || 
                url.includes('gstatic.com') || 
                url.includes('cdn.tailwindcss.com') ||
                url.startsWith(self.location.origin)) {
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                  console.log('Service Worker: Cached runtime resource:', url);
                });
            }

            return response;
          })
          .catch(error => {
            console.log('Service Worker: Fetch failed, attempting cache fallback:', error);
            // Return a cached response if available, otherwise return error
            return caches.match(event.request)
              .then(cachedResponse => {
                if (cachedResponse) {
                  return cachedResponse;
                }
                // For navigation requests, return the index page as fallback
                if (event.request.mode === 'navigate') {
                  return caches.match('./index.html');
                }
                throw error;
              });
          });
      })
  );
});
