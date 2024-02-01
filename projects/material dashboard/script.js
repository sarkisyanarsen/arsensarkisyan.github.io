
let a = true;
let b = true;


cl.addEventListener('click', () => {
    sett.style.display = 'none'
})

// let se = document.getElementsByClassName('se')
se.addEventListener('click', () => {
    sett.style.display = 'block'
})

see.addEventListener('click', () => {
    sett.style.display = 'block'
})

circle1.addEventListener('click', () => {
    if (a) {
        circle1.style.transform = 'translateX(20px)'
        bk.style.backgroundColor = '#42424A'
        circle1.style.border = '1px solid #42424A'
        navv.style.position = 'fixed'
    }
    else {
        circle1.style.transform = 'translateX(0px)'
        bk.style.backgroundColor = '#CED4DA'
        circle1.style.border = '1px solid #CED4DA'
        navv.style.position = 'static'
    }
    a = !a
})
let conf = document.querySelector('.conf')
let p = false;

circle2.addEventListener('click', () => {
    if (b) {
        circle2.style.transform = 'translateX(20px)'
        bk2.style.backgroundColor = '#42424A'
        circle2.style.border = '1px solid #42424A'
        body.style.backgroundColor = '#42424A'
        dash.style.color = '#D2D3D7'
        d.style.color = '#FFFFFF'
        sett.style.backgroundColor = '#343439'
        conf.style.color = 'white'
        s.style.color = 'white'
        ss.style.color = 'white'
        nnn.style.color = 'white'
        aa.style.color = 'white'
        nn.style.color = 'white'
        w.style.color = 'white'
        w.style.border = '1px solid white'
        t.style.color = 'white'
        t.style.border = '1px solid white'

    }
    else {
        circle2.style.transform = 'translateX(0px)'
        bk2.style.backgroundColor = '#CED4DA'
        circle2.style.border = '1px solid #CED4DA'
        body.style.backgroundColor = '#F0F2F5'
        dash.style.color = '#586882'
        d.style.color = '#586882'
        sett.style.backgroundColor = '#FFFFFF'
        conf.style.color = '#344767'
        s.style.color = '#344767'
        ss.style.color = '#344767'
        nnn.style.color = '#344767'
        nn.style.color = '#344767'
        aa.style.color = '#344767'
        w.style.color = '#6D4767'
        w.style.border = '1px solid #6D4767'
        t.style.color = '#6D4767'
        t.style.border = '1px solid #6D4767'
    }
    b = !b
    p = !p;

})

let one = document.getElementsByClassName('one')
for (let i = 0; i < one.length; i++) {
    one[i].addEventListener('click', () => {
        one[i].classList.add("new")

        for (let j = 0; j < one.length; j++) {
            if (one[i] !== one[j]) {
                one[j].classList.remove('new')
            }
        }
    })

}


// let ne = document.querySelector('.new')

// c1.addEventListener('click', () => {
//     ne.style.backgroundColor = '#E12C6C'

// })

// c2.addEventListener('click', () => {
//     one.style.backgroundColor = '#E12C6C'

// })

// c3.addEventListener('click', () => {
//     one.style.backgroundColor = '#E12C6C'

// })
let ff = "";
let upgrade = document.querySelector(".upgrade")
let arr = ["purple", "black", "blue", "green", "orange", "red"]
let colors = document.querySelector('.colors')
for (let i = 0; i < arr.length; i++) {
    let divs = document.createElement('div')
    divs.classList.add("purple")
    divs.style.backgroundColor = arr[i]
    colors.append(divs)
    divs.addEventListener("click", () => { ff = arr[i] })



}

let active = one[0];

for (let j = 0; j < one.length; j++) {



    one[j].addEventListener("click", () => {
        for (let i = 0; i < one.length; i++) {
            if (one[i] !== one[j]) {
                one[i].style.backgroundColor = "rgba(0,0,0,0)"
            }


        }
        one[j].style.backgroundColor = ff
        upgrade.style.backgroundColor = ff


        active = one[j]
        console.log(active);

    })

}

let purple = document.querySelectorAll(".purple")
for (let elem of purple) {
    elem.addEventListener("click", () => { active.style.backgroundColor = ff; upgrade.style.backgroundColor = ff })
}

darkk.addEventListener('click', () => {
    left.style.backgroundColor = '#343439'
    mat.style.color = 'white'
    for (let elem of one) {
        elem.style.color = 'white'
    }
})

let k = false;

t.addEventListener('click', () => {
    left.style.backgroundColor = 'transparent'
    if (k && p) {
        for (let elem of one) {
            elem.style.color = 'black'
        }
        mat.style.color = 'black'
    } else {
        for(let elem of one) {
            elem.style.color = 'white'
        }
        mat.style.color = 'white'
    }
    k = !k
    p = !p
})

w.addEventListener('click', () => {
    left.style.backgroundColor = 'white'
    mat.style.color = 'black'
    for (let elem of one) {
        elem.style.color = 'black'
    }
})