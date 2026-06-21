/* Amp Academy — NEC 2017 Journeyman · service worker (SAS §2.3)
   Offline-first runtime cache: caches the page + Google Fonts on first visit so
   the course works fully offline after. Bump CACHE on any shipped change. */
const CACHE = 'aa-jrny-2017-v5';   /* v3: relay-backed tutor added (v2 was calc embed) 2026-06-18 */

self.addEventListener('install', e => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit || fetch(e.request).then(resp => {
        if (resp && (resp.ok || resp.type === 'opaque')) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    )
  );
});
