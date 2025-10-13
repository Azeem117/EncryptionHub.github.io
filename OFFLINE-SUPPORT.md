# Offline Support Documentation

## Overview
Encryption Hub now has comprehensive offline support through Service Workers, allowing the application to work without an internet connection after the initial visit.

## Features

### 1. Service Worker Caching
The app uses a Service Worker (`sw.js`) to cache all necessary resources:
- All HTML pages (index.html, page1-5.html)
- Application manifest and icons
- External CSS libraries (Tailwind CSS)
- Google Fonts (Inter, Fira Code)

### 2. Cache Strategy
The application uses a **Cache-First** strategy with runtime caching:
- On first load, essential assets are cached
- External resources (CDN libraries, fonts) are cached on-demand
- If a resource isn't in cache, it's fetched from network and then cached
- If offline and resource isn't cached, it falls back to cached versions

### 3. Cache Versioning
- Cache Name: `encryption-hub-cache-v2`
- Runtime Cache: `encryption-hub-runtime-v2`
- Old caches are automatically cleaned up when new versions are deployed

## How It Works

### Installation
When a user first visits the site:
1. Service Worker is registered
2. Essential assets are downloaded and cached
3. External resources are fetched and cached (with fallback handling)

### Active Use
Once the Service Worker is active:
1. All requests are intercepted
2. If resource is in cache, it's served immediately
3. If not in cache, it's fetched from network
4. Successfully fetched resources are added to cache for future use

### Offline Mode
When the user loses internet connection:
1. All cached resources continue to work normally
2. The app remains fully functional for encryption/decryption operations
3. All cryptographic operations happen client-side (no network needed)

## Testing Offline Support

### Browser DevTools
1. Open the application in Chrome/Edge/Firefox
2. Open DevTools (F12)
3. Go to "Application" tab > "Service Workers"
4. Check "Offline" checkbox
5. Reload the page - it should work perfectly offline!

### Network Tab
1. Open DevTools > Network tab
2. First load: Resources load from network
3. Reload: Resources show "(from ServiceWorker)" or "(from disk cache)"
4. Toggle offline mode: All resources still available from cache

## Benefits

### For Users
- **Fast Loading**: Cached resources load instantly
- **Reliable**: Works without internet after first visit
- **Privacy**: All operations are client-side, no data transmitted
- **Mobile-Friendly**: Reduces data usage after initial load

### For the App
- **Progressive Web App (PWA)**: Can be installed as standalone app
- **Resilient**: Works in poor network conditions
- **Better UX**: No loading delays for cached resources

## Technical Details

### Cached Resources
- **Static Pages**: All HTML files
- **Manifest**: PWA configuration
- **Icons**: Application icons
- **External Libraries**: 
  - Tailwind CSS from cdn.tailwindcss.com
  - Google Fonts (Inter, Fira Code)

### Cache Limits
- Browser-dependent (typically 50-100MB for cache storage)
- Service Worker automatically manages cache lifecycle
- Old versions are cleaned up on update

### Browser Compatibility
Service Workers are supported in:
- Chrome/Edge 40+
- Firefox 44+
- Safari 11.1+
- Opera 27+

## Updates and Maintenance

### Updating Cached Resources
When the service worker file (`sw.js`) changes:
1. Browser detects the change
2. New Service Worker is installed in background
3. Old caches are cleaned up
4. New caches are populated
5. Page reloads to activate new version

### Cache Invalidation
To force cache refresh, update the cache version in `sw.js`:
```javascript
const CACHE_NAME = 'encryption-hub-cache-v3'; // Increment version
const RUNTIME_CACHE = 'encryption-hub-runtime-v3';
```

## Security Considerations

### Client-Side Operations
- All encryption/decryption happens in the browser
- No data is sent to servers
- Service Worker only caches static assets
- User data is never cached by the Service Worker

### HTTPS Requirement
- Service Workers only work on HTTPS (or localhost)
- GitHub Pages provides HTTPS by default
- This ensures secure caching and prevents tampering

## Troubleshooting

### Service Worker Not Registering
- Check browser console for errors
- Verify HTTPS is enabled
- Clear browser cache and try again

### Resources Not Caching
- Check DevTools > Application > Cache Storage
- Verify network connectivity on first load
- Check for CORS errors in console

### Old Version Persisting
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear Service Workers in DevTools
- Clear browser cache

## Future Enhancements

Potential improvements for offline support:
- Background sync for future features
- Push notifications for updates
- IndexedDB for storing user preferences
- Offline analytics tracking
