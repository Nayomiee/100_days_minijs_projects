const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const count = document.getElementById("count")
const result = document.getElementById("result")

let counter =0 ;

increaseBtn.onclick = function(){
    counter++;
    count.textContent = counter;
    if (counter<0){
        count.textContent =0;
    }
}
decreaseBtn.onclick = function(){
    counter--;
    count.textContent = counter;
    if (counter<0){
       alert("cannot be lower than 0")
       count.textContent = 0;
    }
}
clearBtn.onclick = function(){
    counter =0;
    count.textContent= counter;
}
