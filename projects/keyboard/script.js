let keyboard = document.querySelector(".keyboard");
let small = document.querySelector(".small");
let big = document.querySelectorAll(".q-parent");
let up = document.querySelectorAll(".shift");

let i = true;
function f() {
    if (i) {
        for (let elem of big) {
            elem.style.transform = "rotateY(180deg)"
        }
        for (let elem of up) {
            elem.style.transform = "rotateY(180deg)"
        }
    } else {
        for (let elem of big) {
            elem.style.transform = "rotateY(0deg)"
        }
        for (let elem of up) {
            elem.style.transform = "rotateY(0deg)"
        }
    }
    i = !i;
}

let board = document.querySelector(".keyboard");

function b() {
    let random1 = Math.ceil(Math.random() * 255);
    let random2 = Math.ceil(Math.random() * 255);
    let random3 = Math.ceil(Math.random() * 255);
    console.log(random1 + random2 + random3);
    board.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}

let one = document.querySelector(".bykva");
let numparent = document.querySelector(".num-parent");
let number = document.querySelectorAll(".number-parent");
let c = true;

function num() {
    if (c) {
        for (let elem of number) {
            elem.style.transform = "rotateY(180deg)"
        }
        one.style.display = "none";
        smiles.style.display = "none";
        numparent.style.display = "flex"
        l = true
    } else {
        for (let elem of number) {
            elem.style.transform = "rotateY(0deg)"
        }
        smiles.style.display = "none";
        numparent.style.display = "none"
        one.style.display = "flex";
    }
    c = !c;
}

// numparent.addEventListener("click", () => {
//     if(numparent.style.display == "flex" || smiles.style.display == "flex") {
//         numparent.style.display = "none";
//         smiles.style.display = "none"
//     }else {
//         console.log("error");
//     }
// })

k = true;

function keys() {
    if (k) {
        board.style.display = "none";
    } else {
        board.style.display = "block";
    }
    k = !k;
}

enter.addEventListener("click", () => {
    enter.style.backgroundColor = "#363636";
    setTimeout(() => {
        enter.style.backgroundColor = "#78787E";
    }, 100)
    inp.value = "";
})

let smiles = document.querySelector(".smiles");
l = true;

function smile() {
    if (l) {
        smiless.style.display = "flex";
        one.style.display = "none";
        numparent.style.display = "none";
        c = true
    } else {
        one.style.display = "flex";
        smiless.style.display = "none";
        numparent.style.display = "none";
    }
    l = !l;
}

let all = document.getElementsByClassName("all");
// let al = document.getElementsByClassName("all")

for (let elem of all) {
    elem.addEventListener("click", () => {
        // inp.value += elem.innerHTML;
        const pos = inp.selectionStart;
        inp.value = inp.value.substring(0, pos) + elem.innerHTML + inp.value.substring(pos)
        inp.selectionStart = pos + 1;
        inp.selectionEnd = pos + 1
        elem.style.backgroundColor = "#363636";
        setTimeout(() => {
            elem.style.backgroundColor = "#78787E";
        }, 100)
        inp.focus()
    })
}

let emodzi = document.getElementsByClassName("emodzi");

for(let elem of emodzi) {
    elem.addEventListener("click", () => {
        const pos = inp.selectionStart;
        inp.value = inp.value.substring(0, pos) + elem.innerHTML + inp.value.substring(pos)
        inp.selectionStart = pos + 1;
        inp.selectionEnd = pos + 1;
        elem.style.backgroundColor = "#363636";
        setTimeout(() => {
            elem.style.backgroundColor = "#78787E";
        },  100)
        // inp.value += elem.innerHTML
        inp.focus()
    })
}

let spaceclick = document.querySelector(".space");

spaceclick.addEventListener("click", () => {
    inp.focus()
    spaceclick.style.backgroundColor = "#363636";
    setTimeout(() => {
        spaceclick.style.backgroundColor = "#78787E";
    }, 100)
    const pos = inp.selectionStart;
        inp.value = inp.value.substring(0, pos) + " " + inp.value.substring(pos)
        inp.selectionStart = pos + 1;
        inp.selectionEnd = pos + 1
})

kar.addEventListener("click", () => {
    inp.focus()
    kar.style.backgroundColor = "#363636";
    setTimeout(() => {
        kar.style.backgroundColor = "#78787E";
    }, 100)
    const pos = inp.selectionStart;
        inp.value = inp.value.substring(0, pos) + "<" + inp.value.substring(pos)
        inp.selectionStart = pos + 1;
        inp.selectionEnd = pos + 1;
})

karr.addEventListener("click", () => {
    inp.focus()
    karr.style.backgroundColor = "#363636";
    setTimeout(() => {
        karr.style.backgroundColor = "#78787E";
    }, 100)
    const pos = inp.selectionStart;
        inp.value = inp.value.substring(0, pos) + ">" + inp.value.substring(pos)
        inp.selectionStart = pos + 1;
        inp.selectionEnd = pos + 1;
})




document.getElementById("karyetka").addEventListener("click", sendCaretAction);
document.getElementById("karyetkaa").addEventListener("click", sendCaret);

function sendCaretAction() {
    const pos = inp.selectionStart;
    if (inp.selectionStart >= 1) {
        inp.selectionStart = pos - 1;
        inp.selectionEnd = pos - 1;
    }
    inp.focus()
}

function sendCaret() {
    const pos = inp.selectionStart;
    inp.selectionStart = pos + 1;
    inp.selectionEnd = pos + 1
    inp.focus()
}


function del() {
    var ss = inp.selectionStart;
    var se = inp.selectionEnd;
    var ln = inp.value.length;
    var textbefore = inp.value.substring(0, ss);    //text in front of selected text
    // var textselected = inp.value.substring(ss, se); //selected text
    var textafter = inp.value.substring(se, ln);    //text following selected text
    if (ss == se) // if no text is selected
    {
        inp.value = inp.value.substring(0, ss - 1) + inp.value.substring(se, ln);
        inp.focus();
        inp.selectionStart = ss - 1;
        inp.selectionEnd = ss - 1;
    }
    else // if some text is selected
    {
        inp.value = textbefore + textafter;
        inp.focus();
        inp.selectionStart = ss;
        inp.selectionEnd = ss;
    }
}