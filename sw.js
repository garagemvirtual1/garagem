const CACHE_NAME = 'garagem-virtual-v2';
const ASSETS_TO_CACHE = [
  '/garagem/',
  '/garagem/index.html',
  '/garagem/icone.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
