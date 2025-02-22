//your JS code here. If required.
let body=document.querySelector("body");
let div=document.createElement("div");
div.setAttribute("id","browser-info");

div.innerHTML=`<p>You are using ${navigator.userAgent} ${navigator.appName} version ${navigator.Version}.</p>`
body.appendChild(div);