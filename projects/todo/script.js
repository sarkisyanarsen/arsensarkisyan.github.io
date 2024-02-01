function allStorage() {
    var archive = [];
    for (var i = 0; i < localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }
    return archive;
}
let arr = allStorage();
for(let elem of arr) {
    
    let div = document.createElement('div')
    let p = document.createElement('p')
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    div.classList.add("item")

        div.style.border = "1px solid black"
        btn1.style.backgroundColor = "greenyellow"
        btn1.style.border = "none"
        btn1.style.height = "25px"
        btn1.style.borderRadius = "10px"
        btn1.style.color = "grey"
        btn1.style.marginLeft = "70%"
        btn2.style.backgroundColor = "greenyellow"
        btn2.style.border = "none"
        btn2.style.height = "25px"
        btn2.style.borderRadius = "10px"
        btn2.style.color = "red"

        btn1.innerHTML = "Complete"
        btn2.innerHTML = 'X'
        p.innerHTML = elem

        div.append(btn1, btn2, p)

        btn2.onclick = () => removetodo(div)

        btn1.onclick = () => changeToDoStatus(div);

        list.prepend(div)

}

btn.addEventListener("click", () => {
    if (inp1.value === "") {
        alert("Sorry, but your input is empty!")
    } else {
        let dd = Date.now()
        localStorage.setItem('text' + dd, inp1.value)
        let x = localStorage.getItem("text" + dd)
        console.log(x);


        let div = document.createElement("div")
        let p = document.createElement("p")
        let btn1 = document.createElement('button')
        let btn2 = document.createElement("button")

        div.classList.add("item")

        div.style.border = "1px solid black"
        btn1.style.backgroundColor = "greenyellow"
        btn1.style.border = "none"
        btn1.style.height = "25px"
        btn1.style.borderRadius = "10px"
        btn1.style.color = "grey"
        btn1.style.marginLeft = "70%"
        btn2.style.backgroundColor = "greenyellow"
        btn2.style.border = "none"
        btn2.style.height = "25px"
        btn2.style.borderRadius = "10px"
        btn2.style.color = "red"

        btn1.innerHTML = "Complete"
        btn2.innerHTML = 'X'
        p.innerHTML = inp1.value

        inp1.value = ''

        div.append(btn1, btn2, p)


        btn1.onclick = () => changeToDoStatus(div);
        btn2.onclick = () => removetodo(div)
        

        list.prepend(div)


    }


})

function changeToDoStatus(todo) {
    todo.classList.toggle('done')
}
function removetodo (todo){
    todo.remove()
    for(let key in localStorage) {
        if(localStorage.getItem(key) === todo.lastChild.innerText) {
            localStorage.removeItem(key)
        }
    }
}

let radios = document.querySelectorAll('input[name="nnn"]')
console.log(radios);
radios[0].setAttribute('checked', "")
radios.forEach((radio) => {
    radio.onchange = function () {
        let all = document.querySelectorAll('.item')
        all.forEach((elm) => elm.classList.add('hide'))
        console.log(this.value);
        switch (this.value) {
            case 'all':
                all.forEach((item) => item.classList.remove('hide'))
                break;
            case 'active':
                all.forEach(
                    (item) =>
                        !item.classList.contains('done') && item.classList.remove('hide')
                );
                break;
            case 'complated':
                all.forEach(
                    (item) =>
                        item.classList.contains('done') && item.classList.remove('hide')
                );
                break;
        }
    }
})


