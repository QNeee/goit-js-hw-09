var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form");let l=null,u=null,a=null;function s(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function d({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function f({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}r.addEventListener("submit",(function(e){e.preventDefault(),function(e){const{elements:{delay:n,step:t,amount:o}}=e.currentTarget;l=Number(n.value),u=Number(t.value),a=Number(o.value);for(let e=1;e<=a;e++)s(e,l).then(d).catch(f),l+=u}(e),e.target.reset()}));
//# sourceMappingURL=03-promises.5a0483eb.js.map