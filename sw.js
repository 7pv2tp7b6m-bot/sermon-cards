'use strict';
const CACHE='sermon-cards-v1.0.0';
const ASSETS=['./','./index.html','./styles.css','./core.js','./app.js','./vendor/jszip.min.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('sermon-cards-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(event.request,{ignoreSearch:true});if(hit)return hit;if(event.request.mode==='navigate')return cache.match('./index.html');return fetch(event.request);})());});
self.addEventListener('message',event=>{if(event.data?.type==='CHECK_OFFLINE')event.waitUntil((async()=>{const cache=await caches.open(CACHE);const results=await Promise.all(ASSETS.map(a=>cache.match(a)));event.ports[0]?.postMessage({ready:results.every(Boolean),version:CACHE});})());});
