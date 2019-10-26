const cachePrefix = 'jsonformatter::';
const cacheVer = 'v1';
const cacheName = cachePrefix + cacheVer;

const cacheResources = ['/', '/index.html', '/web.css', '/index.js', '/format_json.js', '/sri_json.png'];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName)
		.then(cache => cache.addAll(cacheResources))
 	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys()
		.then(cacheKeys => {
			return Promise.all(
				cacheKeys.filter(cacheKey => !cacheKey.includes(cacheName))
				.map(oldCacheKey => caches.delete(oldCacheKey))
			);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(cachedResponse => {
			if (cachedResponse) {
				return cachedResponse;
			} else {
				return fetch(event.request);
			}
		})
	);
});