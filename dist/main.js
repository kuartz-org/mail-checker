(()=>{"use strict";const e=e=>e.split(/\b\w+\b/).length-1;document.querySelector("button").addEventListener("click",(o=>{o.preventDefault();let t=document.querySelector(".subject-input").value,l=document.querySelector(".body-input").value;console.log(t),console.log(l),console.log(e(t)),console.log(e(l)),console.log(t.split(/[\+?{}.!]/).length-1),console.log(/[A-Z]/.test(t.charAt(0)))}))})();