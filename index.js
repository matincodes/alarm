const secDiv = document.getElementById("sc");
const minDiv = document.getElementById("mn");
const hourDiv = document.getElementById("hr");

setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();

const btnPlus = document.getElementById('img');

btnPlus.addEventListener('click', function(){
  var time = document.getElementById("time");
  time.classList.toggle("active");
})

function showTime()
{
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";
 
	if(h == 0){
		h = 12;
	}
 
	if(h > 12){
		h = h - 12;
		session = "PM";
		}
 
		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;
 
		var time = h + ":" + m + ":" + s + " " + session;
		document.getElementById("clock-text__time").innerText = time;
		document.getElementById("clock-text__time").textContent = time;

		var today = new Date();

		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		var date = today.toLocaleDateString("en-US", options);
 		document.getElementById("clock-text__date").innerText = date;
 		document.getElementById("clock-text__date").textContent = date;

		setTimeout(showTime, 1000);
}
 
			showTime();