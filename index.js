/** CLOCK */
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


/* SET ALARM */
var timer = document.getElementById('timer');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');
var setalarm = document.getElementById('setalarm');
var div = document.getElementById('alarm');
var clock = document.getElementById('clock_time')
var timeModal =  document.getElementById('time');

var currentTime;
var alarmElement;
var p;
var sound = document.getElementById('my_alarm');

p = document.createElement('p');

function showTime(){
  var now = new Date();
  currentTime = now.toLocaleTimeString();

  if (currentTime === p.textContent){
    sound.play();
  }
  // console.log(alarmElement);
  timer.textContent = currentTime;
  clock.textContent = currentTime;
  setTimeout(showTime, 1000);
}

showTime();

function addMinSec(id){
  var select = id;
  var min = 59;

  for(var i = 0; i <= min; i++
    ){
    select.options[select.options.length] = new Option(i < 10? "0" + i : i);
  }
}

function addHours(id){
  var select = id;
  var min = 12;

  for(var i = 0; i <= min; i++
    ){
    select.options[select.options.length] = new Option(i < 10? "0" + i : i);
  }
}
addHours(hours);
addMinSec(seconds);
addMinSec(minutes);


setalarm.addEventListener('click', function(){
          alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value + " " + ampm.value; 
          p.appendChild(document.createTextNode(alarmElement));
          div.appendChild(p);
          p.classList.add("alarm");

          hours.value = "00";
          minutes.value = "00";
          seconds.value = "00";

         timeModal.classList.remove('active'); //close modal after setting alarm
          
 });

/** Splash */
 var splash = document.querySelector(".splash");

 document.addEventListener("DOMContentLoaded", (e)=>{
   setTimeout(() => {
     splash.classList.add("none")
   }, 2500);
 })

  //COLOR SCHEME
  const darkMode = document.querySelector('#dark');
  const magenta = document.querySelector('#magenta');
  const purple = document.querySelector('#purple');
  const body = document.querySelector('body');

  darkMode.addEventListener('click', ()=>{
      body.style.background = "rgb(36, 35, 35)";
  })



  magenta.addEventListener('click', ()=>{
      body.style.background = "magenta";
  })
  purple.addEventListener('click', ()=>{
      body.style.background = "purple";
  });


  
  /**DATE */

var callDate = document.querySelector(".clock_date");

  function renderDate() {
    var myDate = new Date();
    var day = myDate.getDay();
    var year = myDate.getYear();
      if (year < 1000){
           year += 1900;
      }
    var month  = myDate.getMonth();
    var daym = myDate.getDate();
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December");

    callDate.textContent = `${dayArray[day]}  ${daym} ${monthArray[month]}, ${year}.`
  }


  renderDate();