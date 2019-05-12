// convert degrees to radians

const deg2rad = (d) => 2 * d / 360 * Math.PI;

// progress the clock's hands every once in a while

setInterval(() => {
  let minute = document.getElementById("minute");
  let hour = document.getElementById("hour");
  let second = document.getElementById("second");

  // retracing the angles by 90 degrees,because 0 degree is at 3p.m not 12 p.m
  let S = new Date().getSeconds() * 6 - 90;
  let M = new Date().getMinutes() * 6 - 90;
  let H = new Date().getHours() * 30 - 90;

  second.style.transform = 'rotate('+ S + 'deg)';
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
}, 10);

// Calculate the angle of each hand on the clock
function vec2ang(x, y){
  angleInRadians = Math.atan2(y, x);
  angleInDegrees = (angleInRadians / Math.PI) * 180;
  return angleInDegrees;
}

// calculate position and angle of clock's notches

let nc = document.getElementById("notch-container");

let angle = 0;
let rotate_x = 120;
let rotate_y = 0;

// calculate the 60 notches for seconds and minutes
for (let i = 0; i < 60; i++){
  let thin = document.createElement('div');
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  thin.className = "thin";
  thin.style.left = 122 + x + "px";
  thin.style.top = 127 + y + "px";
  thin.style.transform = "rotate(" + r + "deg)";
  nc.appendChild(thin);
  angle += (Math.PI / 300) * 10;
}

// reset angle parameters
angle = 0; rotate_x = 120; rotate_y = 0;

// calculate thicker notches for hour hand

for (let i = 0; i < 12; i++) {
  let notch = document.createElement('div');
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  notch.className = "notch";
  notch.style.left = 122 + x + "px";
  notch.style.top = 127 + y + "px";
  notch.style.transform = "rotate(" + r + "deg)"
  nc.appendChild(notch);
  angle += (Math.PI / 60) * 10;

  console.log(notch);
  
}