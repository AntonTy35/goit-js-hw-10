!function(){var e="https://api.thecatapi.com/v1",n="live_MLMEZPUTycenXY4aowkAlwJ8Usad9Hnb5et1NPirg9x6Kl6YWXD0uwBjoZ4cYZC9",t=document.querySelector(".loader");var o=document.querySelector(".breed-select"),c=document.querySelector(".loader"),a=document.querySelector(".error"),l=document.querySelector(".cat-info");o.style.display="none",o.style.margin="20px",a.style.display="none",a.style.color="red",l.style.display="flex",l.style.gap="20px",(t.style.display="block",fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){c.style.display="none",o.style.display="block",o.innerHTML=e.map((function(e){var n=e.id,t=e.name;return'<option value="'.concat(n,'">').concat(t,"</option>")})).join("")})).catch((function(e){c.style.display="none",a.style.display="block",console.log("Failure",e)})),o.addEventListener("change",(function(){l.style.display="none",a.style.display="none",(r=o.value,t.style.display="block",fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(r)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){var n,t,o,a,r,s;c.style.display="none",l.innerHTML=(n=e[0],t=n.url,o=n.breeds[0],a=o.name,r=o.description,s=o.temperament,'<img src="'.concat(t,'" alt="').concat(a,'" width="50%" >\n    <div>\n      <h2>').concat(a,"</h2>\n      <p>").concat(r,"</p>\n      <p><b>Temperament: </b>").concat(s,"</p>\n    </div>")),l.style.display="flex"})).catch((function(e){c.style.display="none",a.style.display="block",console.log("Failure",e)}));var r}))}();
//# sourceMappingURL=index.2fdc8b45.js.map
