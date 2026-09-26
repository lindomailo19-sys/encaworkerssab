const CACHE="mi-cache-v2"

const RECURSOS=[
    "./",
    "./sw.js",
    "/index.html",
    "./css/bootstrap.min.css",
    "./css/estilos.css",
    "./js/bootstrap.bundle.min.js"
]

self.addEventListener("install",event=>{
    evento.esperarHasta(
        cachés.abrir(CACHE)
        .entonces(caché=>caché.addAll(RECURSOS))
    );
})
self.addEventListener("fetch",event=>{
    evento.responderCon(
        cachés.coincidencia(evento.solicitud)
        .then(respuesta=>{
            return respuesta || fetch(evento.solicitud);
        })
        .catch(()=>{
            return caches.match("/offline.html")
        })
    )
})