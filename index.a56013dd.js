!function(){var e="https://api.thecatapi.com/v1",n="live_MLMEZPUTycenXY4aowkAlwJ8Usad9Hnb5et1NPirg9x6Kl6YWXD0uwBjoZ4cYZC9";var t=document.querySelector(".breed-select"),o=document.querySelector(".loader"),c=document.querySelector(".error"),a=document.querySelector(".cat-info");t.style.display="none",t.style.margin="20px",c.style.display="none",c.style.color="red",a.style.display="flex",a.style.gap="20px",t.addEventListener("change",(function(){(o=t.value,fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(o)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){var n,t,o,c,r,i;a.innerHTML=(n=e[0],t=n.url,o=n.breeds[0],c=o.name,r=o.description,i=o.temperament,'<img src="'.concat(t,'" alt="').concat(c,'" width="50%" >\n    <div>\n      <h2>').concat(c,"</h2>\n      <p>").concat(r,"</p>\n      <p><b>Temperament: </b>").concat(i,"</p>\n    </div>"))})).catch((function(e){console.log("Failure",e)}));var o})),fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){o.style.display="none",t.style.display="block",t.innerHTML=e.map((function(e){var n=e.id,t=e.name;return'<option value="'.concat(n,'">').concat(t,"</option>")})).join("")})).catch((function(e){o.style.display="none",c.style.display="block",console.log("Failure",e)}))}();
//# sourceMappingURL=index.a56013dd.js.map
