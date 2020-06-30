const cacheName = 'news-v1';
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './App.css',
  './index.js',
  './index.css',
  './store.js',
  '../actions/authActions.js',
  '../actions/types.js',
  '../components/auth/login.js',
  '../components/auth/Register.js',
  '../components/dashboard/Dashboard.js',
  '../components/gallery/Gallery.jsx',
  '../components/layout/Landing.js',
  '../components/layout/Navbar.js',
  '../components/private-route/PrivateRoute.js'



];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}