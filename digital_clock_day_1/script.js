function timer (){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
   
   seconds = seconds < 10? `0${seconds}`: seconds;
   minutes = minutes < 10? `0${minutes}`:minutes;
   hours = hours <10? `0${hours}`:hours;

   const body = document.getElementById("body");
   if (hours>17){
    body.style.backgroundColor = 'black';
    document.getElementById("clock").style.color ='white';
   }

    const time =`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = time; 
}
setInterval(timer,1000)
timer();