let time = document.getElementById("current-time");
let date = document.getElementById("current-date");



setInterval(() => 
{
let d = new Date();
  time.innerHTML = d.toLocaleTimeString([] , {hour : "2-digit", minute : "2-digit" ,hour12 : false,});
}, 1000);  

setInterval(() => 
{
let e = new Date();
  var da = e.toLocaleDateString([] , {day: "2-digit", month: "short"});
  var year = e.toLocaleDateString([] , {year: "numeric"});
  var we = e.toLocaleDateString([] , {weekday: "long"});

  date.innerHTML = `${da} ${year}, ${we}`;
}, 1000);  