const CACHE_NAME = 'tamandare-auditoria-v1';

// Instala o Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// O navegador EXIGE este evento 'fetch' para liberar o botão de instalar o App
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
