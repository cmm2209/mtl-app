if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>t(e,r),l={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-29774118"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/public/bundle.js",revision:"be37b39253924d7b6d35565ae7344cfc"},{url:"/public/bundle.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"},{url:"/public/index.html",revision:"d70a4a3b0cb1a4525742f9419c9458da"}],{})}));
