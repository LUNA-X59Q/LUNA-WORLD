// AI BOX 서비스 워커 — 앱 껍데기를 캐시해 오프라인에서도 열린다.
// 카드는 localStorage에 있으므로 껍데기만 있으면 완전 동작.
// HTML은 네트워크 우선(새 배포 즉시 반영), 정적 자산은 캐시 우선.
const CACHE = 'ai-box-v23'; // v23: 검색 기능 추가 (카테고리·제목/내용 유형별 검색 페이지)
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'favicon.svg', 'icon-192.png', 'icon-512.png', 'icon-512-maskable.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // 깃허브 raw 등 외부 요청은 항상 네트워크로 — 캐시 우선에 걸리면 글 갱신이 안 된다
  if (new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('index.html', cp)); return r; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r;
    }))
  );
});
