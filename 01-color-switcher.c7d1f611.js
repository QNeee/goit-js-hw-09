let t=null;const o={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(){o.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}o.buttonStop.disabled=!0,o.buttonStart.addEventListener("click",(()=>{t=setInterval(e,1e3),o.buttonStart.disabled=!0,o.buttonStop.disabled=!1})),o.buttonStop.addEventListener("click",(()=>{o.buttonStart.disabled=!1,o.buttonStop.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.c7d1f611.js.map
