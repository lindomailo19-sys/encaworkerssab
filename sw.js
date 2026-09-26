const CACHE="mi-cache-v3"

const RECURSOS=[
    "./",
    "./sw.js",
    "/index.html",
    "./css/bootstrap.min.css",
    "./css/estilos.css",
    "./js/bootstrap.bundle.min.js"
]

self.addEventListener("install",event=>{
    event.waitUntil(
        caches.open(CACHE)
        .then(cache=>cache.addAll(RECURSOS))
    );
})
self.addEventListener("fetch",event=>{
    event.respondWith(
        caches.match(event.request)
        .then(respuesta=>{
            return respuesta || fetch(event.request);
        })
        .catch(()=>{
            return caches.match("/offline.html")
        })
    )
})