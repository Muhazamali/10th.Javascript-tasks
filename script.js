function today() {
  var days;
  var years;
  years = document.getElementById("year").value;
  //console.log(years);
  if (isNaN(years)) {
    document.getElementById("today").innerHTML = "Please enter Numeric value";
  } else {
    days = years * 365;
    document.getElementById("today").innerHTML = "Age in days is:" + days;
  }
}
function toseconds() {
  var seconds, hours;
  hours = document.getElementById("hours").value;
  if (isNaN(hours)) {
    document.getElementById("toseconds").innerHTML =
      "Please enter Numeric value";
  } else {
    //console.log(seconds);
    seconds = 3600 * hours;
    document.getElementById("toseconds").innerHTML =
      seconds + " :Seconds in hours ";
  }
}
function nxtnum() {
  var nxtnum, num;
  num = 0;
  nxtnum = 0;
  num = document.getElementById("num").value;
  if (isNaN(num)) {
    document.getElementById("nxtnum").innerHTML = "Please enter Numeric value";
  } else if (num.includes(".") && !isNaN(num)) {
    num = parseFloat(num);
    
    nxtnum = num + 0.1;
    
    console.log("float");
    document.getElementById("nxtnum").innerHTML =
      "This is the next number:" + nxtnum.toFixed(1);
  } else {
    nxtnum = parseInt(num) + 1;
    document.getElementById("nxtnum").innerHTML =
      "This is the next number:" + nxtnum;
  }
}
function arr() {
  var x;
  x = 0;
  x = parseInt(document.getElementById("num1").value);
  if (isNaN(x)) {
    document.getElementById("array").innerHTML = "Please enter Numeric value";
  } else if (x > 10) {
    document.getElementById("array").innerHTML = "enter number less then 10";
  } else {
    y = [];
    // console.log(x);
    document.getElementById("arr").innerHTML = "";
    for (i = 0; i <= x - 1; i++) {
      y[i] = generateString(5);
      document.getElementById("arr").innerHTML += i + " : " + y[i] + "<br>";
    }
    document.getElementById("array").innerHTML =
      "first element:" + y[0] + "<br>Last element:" + y[y.length - 1];
  }
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

