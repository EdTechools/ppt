import{g as s,d as n,e as c,f as m}from"./shortcuts-BeL4JqRq.js";import"./modules/vue-BOVj5Shv.js";import"./index-pFKLFa-J.js";import"./modules/shiki-sKuWUF9L.js";import"./slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DFhvOrCk.js";import"./slidev/SlideContainer-C97zvfND.js";import"./modules/unplugin-icons-Ca8F49f6.js";import"./status_store-DRWidOEM.js";import"./slidev/IconButton.vue_vue_type_script_setup_true_lang-BXU6HbqL.js";import"./SlideWrapper-C7Hnvpkd.js";let e;const u=c();function N(t,i){if(e)t();else{e=new WebSocket(u),e.addEventListener("close",i),e.addEventListener("open",t);const o=r=>{const{states:a,uid:d}=JSON.parse(r.data);m.value.forEach(p=>p(a,d))};e.addEventListener("message",o)}}function b(t){e&&e.send(JSON.stringify({id:s.value,states:t,type:"connect",uid:n.value}))}function k(t,i){e&&e.send(JSON.stringify({id:s.value,states:{[t]:i},type:"patch",uid:n.value}))}export{N as init,b as open,k as patch};