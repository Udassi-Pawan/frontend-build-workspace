if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>n(e,i),o={module:{uri:i},exports:r,require:c};s[i]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts("/fallback-ba59bcac333a1e0f.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/222-3333bc9abe8dd254.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/262-53af0569e6754b98.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/352-0ac1024376b1bd66.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/361-6d16d8fe709a1204.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/388-6ebab6388d24d620.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/42.316366648bc3a72b.js",revision:"316366648bc3a72b"},{url:"/_next/static/chunks/649-593643c436de08be.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/668-b0eddcab2a688970.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/685-58624f574abd6872.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/691-79a5e62f352520ea.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/6be7e44c-d0190ad4c1998ab8.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/70e0d97a-365805da82075383.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/837-4b57be781a469a57.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/860-9b5a0a901715b09d.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/996-793164ece23a5ed0.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/collab/%5BdocId%5D/page-8c2c746e083a1d3e.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/create/page-300467b47010d294.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/global-error-237a8dd044046bc7.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/group/%5BgroupId%5D/error-6fd3e37344490ba1.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/group/%5BgroupId%5D/page-9d584352c7e2eb61.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/layout-e07d0b082b4e3892.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/login/page-91fc7e6442ceadc3.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/page-b0aee89e2f1a04b5.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/test/page-8ae5c5bef6b680dc.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/video/%5BgroupId%5D/page-eca7fc8e92377912.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/app/~offline/page-62d6219af30b1fbb.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/fd9d1056-8bffb0ced5f3127d.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/main-app-8c2ba13f4427d44e.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/main-f91df7bee31fc4dd.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/pages/_app-6b79a29ad0d63b21.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/pages/_error-9aeb3e4d490fe4b8.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c1d08ad9a95b5c52.js",revision:"p310Eqa5V1GOoyoygGrL4"},{url:"/_next/static/css/043f1ea7edf37a45.css",revision:"043f1ea7edf37a45"},{url:"/_next/static/css/37e24b705263ee77.css",revision:"37e24b705263ee77"},{url:"/_next/static/css/5135f3c8ff83300f.css",revision:"5135f3c8ff83300f"},{url:"/_next/static/css/58bdb11737af2d17.css",revision:"58bdb11737af2d17"},{url:"/_next/static/css/77ebce64d72f4cbc.css",revision:"77ebce64d72f4cbc"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/revicons.652e7269.eot",revision:"652e7269"},{url:"/_next/static/media/revicons.b96bdb22.ttf",revision:"b96bdb22"},{url:"/_next/static/media/revicons.ff59b316.woff",revision:"ff59b316"},{url:"/_next/static/p310Eqa5V1GOoyoygGrL4/_buildManifest.js",revision:"4372edc77fac19cc2d0c3b5042e5bde4"},{url:"/_next/static/p310Eqa5V1GOoyoygGrL4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/~offline",revision:"p310Eqa5V1GOoyoygGrL4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));