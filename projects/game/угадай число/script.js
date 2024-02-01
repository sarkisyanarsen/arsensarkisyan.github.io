// игра угадай число

let b = document.getElementById("num");
let i = 0;
let random = Math.ceil(Math.random() * 100)
let rand = document.querySelector(".rand");
console.log(random);
function check() {
    console.log(i);
    let get = document.querySelector("#checking");
    if (get.value == "") {
        text.innerHTML = `Извините, но ваш инпут пуст!`
    }else if (isNaN(get.value)) {
        text.innerHTML = `Используйте, только числа!`
    }else {
        i++;
        if (i === 10) {
            if (get.value == random) {
                text.innerHTML = `Вы выйграли!`
                b.classList.toggle("ghost");
                get.value = "";
                rand.disabled = true;
            }else {
                text.innerHTML = `Вы проиграли, извините но вы израсходовали все свои попытки.`;
                pp.innerHTML += ` ` + get.value;
                b.classList.toggle("ghost");
                get.value = "";
                rand.disabled = true;
            }
        }
        else {
            if (get.value < random) {
                text.innerHTML = `Ваше число меньше задуманного!`
                pp.innerHTML += ` ` + get.value;
                get.value = "";

            } else if (get.value > random) {
                text.innerHTML = `Ваше число больше задуманного!`
                pp.innerHTML += ` ` + get.value;
                get.value = "";

            } else{
                text.innerHTML = `Вы угадали число: ${random}`
                pp.innerHTML += ` ` + get.value;
                b.classList.toggle("ghost");
                get.value = "";
                rand.disabled = true;
            }
        }
    }
}

// result

// let content = document.getElementsByClassName("modal-content")[0];
// let result = document.getElementsByClassName("results")[0];

// result.onclick = function () {
//     content.style.height = "40%"
// }

// content.onclick = function (event) {
//     if (event.target == content) {
//         content.style.height = "30%";
//     }
// }


// modal window
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}