let arr = []

btn.addEventListener('click', () => {
    window.location.reload()
})

let parent = document.getElementById("parent")
for (let i = 1; i <= 100; i++) {

    // divs
    let one = document.createElement('div')
    let two = document.createElement('div')
    let divv = document.createElement('div')
    let img = document.createElement('img')
    let number = document.createElement('div')

    // event

    one.addEventListener('click', () => {
        one.style.transform = 'rotateY(180deg)'
    })

    // class add
    one.classList.add('one')
    two.classList.add('two')
    divv.classList.add('divv')
    img.classList.add('image')

    number.innerHTML = Math.ceil(Math.random() * 9)

    // append
    divv.append(img, number)

    one.append(two, divv)

    parent.append(one)
    arr.push(one)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let random1 = getRandomNumber(0, 9)
let random2 = getRandomNumber(10, 19)
let random3 = getRandomNumber(20, 29)
let random4 = getRandomNumber(30, 39)
let random5 = getRandomNumber(40, 49)
let random6 = getRandomNumber(50, 59)
let random7 = getRandomNumber(60, 69)
let random8 = getRandomNumber(70, 79)
let random9 = getRandomNumber(80, 89)
let random10 = getRandomNumber(90, 99)


function gameover() {
    // alert('game over')
    let go = document.querySelector('.over')
    go.style.display = 'flex'
}



arr[random1].addEventListener('click', gameover)
arr[random2].addEventListener('click', gameover)
arr[random3].addEventListener('click', gameover)
arr[random4].addEventListener('click', gameover)
arr[random5].addEventListener('click', gameover)
arr[random6].addEventListener('click', gameover)
arr[random7].addEventListener('click', gameover)
arr[random8].addEventListener('click', gameover)
arr[random9].addEventListener('click', gameover)
arr[random10].addEventListener('click', gameover)







arr[random1].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random2].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random3].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random4].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random5].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random6].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random7].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random8].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random9].lastChild.firstChild.setAttribute('src', 'bomb.png')
arr[random10].lastChild.firstChild.setAttribute('src', 'bomb.png')


let modal = document.getElementById("myModal");
let btnn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


btnn.onclick = function () {
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