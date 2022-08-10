function today(){
    var days;
    var years;
    years=document.getElementById("year").value;
    console.log(years);
    days=years*365;
    document.getElementById("today").innerHTML="Age in days is:"+days;

}
function toseconds(){
    var seconds,hours;
    hours=document.getElementById("hours").value;
    console.log(seconds);
    seconds=3600*hours;
    document.getElementById("toseconds").innerHTML=seconds+" :Seconds in hours ";

}
function nxtnum(){
    var nxtnum;
    nxtnum=parseInt(document.getElementById("num").value)+1;
    document.getElementById("nxtnum").innerHTML="This is the next number:"+nxtnum;
}
function arr(){
   var x;
    x=parseInt(document.getElementById("num1").value);

    y=[];
    console.log(x);
    for(i=0;i<=x-1;i++)
    {
        y[i]="asdlfk.."+i;
        console.log(y[i]);
    }
    document.getElementById("array").innerHTML="first element:" + y[0] + "<br>Last element:"+y[y.length-1];
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