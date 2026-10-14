/* Austin Yardage Books service worker.
   Change CACHE to a new value (v2, v3...) every time you edit the app files,
   so phones drop the old copy and pick up the new one. */
const CACHE = 'austin-yardage-v2';
const FONTS = 'austin-yardage-fonts';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // App files: answer from cache instantly (works with no signal), refresh quietly in the background.
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req, { ignoreSearch: true }).then(hit => {
          const refresh = fetch(req).then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || refresh.then(r => r || cache.match('index.html'));
        })
      )
    );
  } else if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    // Fonts: cache on first online visit, then reuse offline.
    e.respondWith(
      caches.open(FONTS).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => { cache.put(req, res.clone()); return res; }))
      )
    );
  }
});
