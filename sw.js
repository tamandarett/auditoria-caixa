// Service Worker ultraleve - Necessário apenas para liberar a instalação do PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// Este evento vazio é a exigência técnica do Google Chrome
self.addEventListener('fetch', (e) => {
    // Não intercepta nada, apenas permite que o site carregue normal
});
