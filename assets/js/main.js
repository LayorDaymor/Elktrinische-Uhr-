function showTime(){
const uhrPlace=document.getElementById("uhrPlatz");
const date1=new Date();
let hour=date1.getHours();
let min=date1.getMinutes();
let sec=date1.getSeconds();
let jahr=date1.getFullYear();
let day;
if (date1.getDay()==0) {
    day="Sonntag"
}
else if (date1.getDay()==1) {
    day="Montag"
}
else if (date1.getDay()==2) {
    day="Dienstag"
}
else if (date1.getDay()==3) {
    day="Mittwoch"
}
else if (date1.getDay()==4) {
    day="Donnerstag"
}
else if (date1.getDay()==5) {
    day="Freitag"
}
else if (date1.getDay()==6) {
    day="Samstag"
}
else(
    day="Error"
)
let pmAm;
if (date1.getHours()>12) {
    pmAm="PM"
}
else{
    pmAm="AM"
}
const currentTime=day+" "+hour+":"+min+":"+sec+" "+pmAm+" "+jahr+" Corona Zeit 😷";
uhrPlace.innerText=currentTime;
setTimeout(showTime, 1000); 
/* oder setInterval(name der Funktion, wie schnell) */
}
showTime();
