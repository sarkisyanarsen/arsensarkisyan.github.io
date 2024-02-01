// let inp = document.getElementById("inp");
let btn = document.getElementsByClassName(".btn");
let body = document.querySelector("body");

function b() {
    // debugger;
    let random1 = Math.ceil(Math.random() * 255);
    let random2 = Math.ceil(Math.random() * 255);
    let random3 = Math.ceil(Math.random() * 255);
    console.log(random1 + random2 + random3);
    // body.style.backgroundColor = inp.value;
    body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}