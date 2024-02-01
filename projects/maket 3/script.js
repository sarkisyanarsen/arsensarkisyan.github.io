let btn1 = document.getElementById("photo")
let btn2 = document.getElementById("design")
let btn3 = document.getElementById("print")

let work1 = document.getElementById("work")
let work2 = document.getElementById("work2")
let work3 = document.getElementById("work3")

a = false;

btn1.addEventListener("click", () => {
    if (a) {
        work1.style.display = "flex"
        photo.style.backgroundColor = "green"
        photo.style.color = "white"
        design.style.backgroundColor = "white"
        design.style.color = "rgb(0, 255, 0)"
        btn3.style.backgroundColor = "white"
        btn3.style.color = "rgb(0, 255, 0)"
        work2.style.display = "none"
        work3.style.display = "none"
    }else {
        work1.style.display = "flex"
        work2.style.display = "none"
        work3.style.display = "none"
        c = !c
    }
    a = !a;
})

c = false;

btn2.addEventListener("click", () => {
    if(c) {
        work2.style.display = "flex"
        photo.style.backgroundColor = "white"
        photo.style.color = "rgb(0, 255, 0)"
        design.style.backgroundColor = "green"
        design.style.color = "white"
        btn3.style.backgroundColor = "white"
        btn3.style.color = "rgb(0, 255, 0)"
        work1.style.display = "none"
        work3.style.display = "none"
    }else {
        work1.style.display = "flex"
        work2.style.display = "none"
        work3.style.display = "none"
        d = !d
    }
    c = !c;
})

d = false;

btn3.addEventListener("click", () => {
    if(d) {
        work3.style.display = "flex"
        photo.style.backgroundColor = "white"
        photo.style.color = "rgb(0, 255, 0)"
        design.style.backgroundColor = "white"
        design.style.color = "rgb(0, 255, 0)"
        btn3.style.backgroundColor = "green"
        btn3.style.color = "white"
        work1.style.display = "none"
        work2.style.display = "none"
    }else {
        work3.style.display = "none"
        work1.style.display = "flex"
        work2.style.display = "none"
    }
    d = !d
})