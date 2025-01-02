const yellowBtn = document.getElementById("yellowbtn");
const redBtn = document.getElementById("redbtn");
const greenBtn = document.getElementById("greenbtn");
const container = document.getElementById("container");
const heading = document.getElementById("heading1")

yellowBtn.onclick = function(){
    container.style.backgroundColor="yellow";
    heading.style.color ="black";
    yellowBtn.style.borderColor="black";
    redBtn.style.borderColor="gray";
    greenBtn.style.borderColor="gray";
}
redBtn.onclick = function(){
    container.style.backgroundColor="red";
    heading.style.color ="white";
    redBtn.style.borderColor="black";
    yellowBtn.style.borderColor="gray";
    greenBtn.style.borderColor="gray";
}
greenBtn.onclick = function(){
    container.style.backgroundColor="green";
    heading.style.color ="white";
    greenBtn.style.borderColor="black";
    yellowBtn.style.borderColor="gray";
    redBtn.style.borderColor="gray";
}
