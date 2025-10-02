const CACHE_NAME = 'encryption-hub-cache-v1';

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

// --- INSTALL EVENT: Cache essential assets ---
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching App Shell for offline use');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) 
  );
});

// --- ACTIVATE EVENT: Clear old caches ---
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
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

// --- FETCH EVENT: Serve content from cache first ---
self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  }
});
