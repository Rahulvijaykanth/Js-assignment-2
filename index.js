let text = document.getElementById("text");
text.innerText = "changed in dom manipulation";

let heading = document.getElementsByTagName("h1");
heading[0].innerText = "DOM ";

let box = document.getElementsByClassName("box");
box[0].innerText = "BOX"


let hello = document.getElementById("hello");
hello.innerText = "Hello World!"

function changeOnClick(){
    // for container
    let content = document.getElementsByClassName("flex-container");
    content[0].style.flexDirection = "column";
    console.log(content);
    //for button
    const button = document.getElementById("btn");
    button.style.border = "2px solid red";
    button.innerText = "Changed";
}


hello.style.color = "red";
hello.id = "heading";


function changePage(){
    let welcome = document.getElementById("welcome");
    welcome.innerText = "Welcome to Elevation Academy"
}

function clock(){
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hh.innerText = hrs;
    mm.innerText = mins;
    ss.innerText = secs;
}
clock();
let allSeconds = 1000;
setInterval(clock,allSeconds);
