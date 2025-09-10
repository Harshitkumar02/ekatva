// Service Worker for Ekatva Welfare Foundation
const CACHE_NAME = 'ekatva-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/mission.html',
    '/team.html',
    '/partners.html',
    '/initiatives.html',
    '/achievements.html',
    '/impact.html',
    '/gallery.html',
    '/careers.html',
    '/contact.html',
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
    '/images/youth.jpg',
    '/images/swachh.jpg',
    '/images/uplogo.png',
    '/images/lnn.png',
    '/images/nhm.png',
    '/images/who.png',
    '/images/unicef.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
    'https://cdn.tailwindcss.com'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
