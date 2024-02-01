let modal = document.getElementById("myModal");
let btnn = document.getElementById("myBtn");
let btnn2 = document.getElementById('myBtn2')
let span = document.getElementsByClassName("close")[0];


btnn.onclick = function () {
    modal.style.display = "flex";
}

btnn2.onclick = function () {
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