let time = document.getElementById("current-time");


setInterval(() => 
{
let d = new Date();
  time.innerHTML = d.toLocaleTimeString([] , {hour : "2-digit", minute : "2-digit" ,hour12 : false});
}, 1000);  