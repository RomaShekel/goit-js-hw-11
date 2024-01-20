import{S as d,i as l}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=new d(".gallery a"),f=document.querySelector("form"),p=document.querySelector(".input"),c=document.querySelector(".gallery"),a=document.querySelector(".loader-container");f.addEventListener("submit",o=>{o.preventDefault();const r=p.value;a.style.display="flex",setTimeout(()=>{y(r)},3e3)});function y(o){const n=`https://pixabay.com/api/?key=41928884-dc2fda080aeeea262233bfc7c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(n).then(e=>{if(a.style.display="none",!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{e.hits.length>0?(h(),m(e.hits)):l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{a.style.display="none",l.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",e)})}function m(o){o.forEach(r=>{const s=`
    <a href="${r.largeImageURL}" data-lightbox="gallery" data-title="${r.tags}">
      <li class="card">
        <img src="${r.webformatURL}" alt="${r.tags}" class="card-img">
        <div class="card-info">
          <div class="div-info">
            <p>Likes <span>${r.likes}</span></p>
          </div>
          <div class="div-info">
            <p>Views <span>${r.views}</span></p>
            </div>
          <div class="div-info">
            <p>Comments <span>${r.comments}</span></p>
            </div>
          <div class="div-info">
            <p>Downloads <span>${r.downloads}</span></p>
            </div>
        </div>
      </li>
    </a>
    `;c.insertAdjacentHTML("beforeend",s)}),u.refresh()}function h(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
