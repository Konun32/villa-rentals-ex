!function(e){var n,t,a=document.documentElement,i=null;function o(e){e=e||function(){};var n=document.querySelectorAll("noscript[data-webp]");if(0!==n.length)for(var t=0;t<n.length;t++){e(n[t])}}function r(e){o(e?function(e){var n=e.textContent;if(-1==n.indexOf(" srcset="))var t=n.indexOf(" src=");else t=n.indexOf(" srcset=");var a=n.indexOf(" ",t+1),i=n.indexOf(">",t+1),o=a>i?i:a,r=n.slice(t,o),c=r.lastIndexOf("."),d=r.slice(c).replace(/\.[a-zA-Z]{3,5}/g,".webp"),l=n.slice(0,t+c)+d+n.slice(o);e.insertAdjacentHTML("afterend",l),e.parentNode.removeChild(e)}:function(e){e.insertAdjacentHTML("afterend",e.textContent),e.parentNode.removeChild(e)})}function c(e){var n,t;return r(e),n=setInterval(r.bind(null,e),15),t=function(){clearInterval(n)},"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t),"done"}n=c,(t=new Image).onload=t.onerror=function(){(i=2===t.height)&&(a.className.indexOf("no-webp")>=0?a.className=a.className.replace(/\bno-webp\b/,"webp"):a.className+=" webp"),n(i)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",e.simpleWebp=c.bind(null,i)}(window);