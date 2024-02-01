

let html = document.querySelector('.htmll')
let test = document.querySelector('.t')


html.addEventListener("mousemove", () => {
        test.classList.add('wd')
        test.style.width = '80%'
        test.style.borderRadius = '20px'
})

html.addEventListener('mouseout', ()=> {
        test.classList.remove('wd')
        test.style.width = '0%'
        test.innerHTML = ''
})

let css = document.querySelector('.csss')
let c = document.querySelector('.c')

css.addEventListener("mousemove", () => {
        c.classList.add('wd')
        c.style.width = '75%'
        c.style.borderRadius = '20px'
})

css.addEventListener('mouseout', ()=> {
        c.classList.remove('wd')
        c.style.width = '0%'
        c.innerHTML = ''
})

let js = document.querySelector('.jss')
let j = document.querySelector('.j')

js.addEventListener("mousemove", () => {
        j.classList.add('wd')
        j.style.width = '60%'
        j.style.borderRadius = '20px'
})

js.addEventListener('mouseout', ()=> {
        j.classList.remove('wd')
        j.style.width = '0%'
        j.innerHTML = ''
})

let py = document.querySelector('.pyy')
let p = document.querySelector('.p')

py.addEventListener("mousemove", () => {
        p.classList.add('wd')
        p.style.width = '20%'
        p.style.borderRadius = '20px'
})

py.addEventListener('mouseout', ()=> {
        p.classList.remove('wd')
        p.style.width = '0%'
        p.innerHTML = ''
})