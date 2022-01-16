function clock(){


    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");


    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM"


    if (hr == 0) {
        hr = 12;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (hr > 12) {
        hr = hr - 12;
        am_pm = "PM";
    }
    
   
          
  /*
            if (a > 12) {
                a = a - 12;
                am.innerText= "PM";
                
                am.pm = "PM";
            }
            if (a < 12) {
             //   a = 12;
                am.innerText="AM";
            }
*/

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    am.innerHTML = am_pm;
}
setInterval(clock,1000);



function Makediv(){
    
    var container = document.createElement("div");
    container.className="grid-item";
    container.id="dynamic-block";

    document.getElementById("left-container1").appendChild(container);

    var invalue = document.getElementById("wakeuptimeselect");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div1").innerHTML="Wake up Time : " + value;

    var invalue = document.getElementById("lunchtimeselect");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div2").innerHTML="Lunch Time : " + value;

    var invalue = document.getElementById("naptimeselect");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div3").innerHTML="Nap Time : " + value;
}





function partytime(){
    var i = document.getElementById("wakeuptimeselect").value;
    var j = document.getElementById("lunchtimeselect").value;
    var z = document.getElementById("naptimeselect").value;
    var hourr = new Date().getHours();

    if(i == hourr){

        document.getElementById("container-image").style.backgroundImage="url(./wake-uptime-image.png)";
        document.getElementById("container-text-h1").innerHTML="Wake Up !!";
        document.getElementById("wishes-select").innerHTML="Good Morning !!";

    }
    if(j == hourr){
        document.getElementById("container-image").style.backgroundImage="url(./lunch-time-image.png)";
        document.getElementById("container-text-h1").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("wishes-select").innerHTML="Good Afternoon !!";
    }
    if(z == hourr){
        document.getElementById("container-image").style.backgroundImage="url(./night-image.png)";
        document.getElementById("container-text-h1").innerHTML="Good Night !!";
        document.getElementById("wishes-select").innerHTML="Good Night !!";
    }





     




    Makediv();
    
}    