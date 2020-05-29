
function time(){
var now=new Date();
var seconds = document.getElementById('secondsHand');
var minutes = document.getElementById('minutesHand');
var hours = document.getElementById('hoursHand');


var second=now.getSeconds();

if(second<10){
    
document.getElementById('secondsTime').innerText="0"+second;
    
}
else{
    
document.getElementById('secondsTime').innerText=second;
}
var secondsDegree=((second/60)*360)+90;
seconds.style.transform=`rotate(${secondsDegree}deg)`;


var minute=now.getMinutes();
if(minute<10){
    
    document.getElementById('minutesTime').innerText="0"+minute;
        
    }
    else{   
         document.getElementById('minutesTime').innerText=minute;
    }
var minutesDegree=((minute/60)*360)+((second/60)*6)+90;
minutes.style.transform=`rotate(${minutesDegree}deg)`;




var hour=now.getHours();
if(hour<10){
    
    document.getElementById('hoursTime').innerText="0"+hour;
        
    }
    else{
document.getElementById('hoursTime').innerText=hour;
}
//console.log(hour);
var hoursDegree = ((hour/12)*360)+((minute/60)*30)+90;
hours.style.transform=`rotate(${hoursDegree}deg)`;

}
setInterval(time,1000);
