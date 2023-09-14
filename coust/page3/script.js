var home = document.querySelector("#home")
var about = document.querySelector("#about")
var section = document.querySelector("#section")
var downloade = document.querySelector("#downloade")
var coustm = document.querySelector("#coustmise")
var coustmise = document.querySelector(".coustmise")
var nvbg = document.querySelector("nav")
var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")
var button3 = document.querySelector("#button3")
var button4 = document.querySelector("#button4")
var cls = document.querySelector(".cls1")
var relative = document.querySelector(".position1")
var fixed = document.querySelector(".position2")

home.addEventListener("click",function(){
    home.style.color = "#fff"
    home.style.backgroundColor = "transparent"
})
about.addEventListener("click",function(){
    about.style.color = "#fff"

})
section.addEventListener("click",function(){
    section.style.color = "#fff"

})
downloade.addEventListener("click",function(){
    downloade.style.color = "#fff"

})

button1.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#000"
})

button2.addEventListener("click",function(){
    nvbg.style.borderBottom = "1px solid #fff"
})

button3.addEventListener("click",function(){
    nvbg.style.backgroundColor = "transparent"
})

button4.addEventListener("click",function(){
    nvbg.style.borderBottom = "0px solid transparent"
})

coustm.addEventListener("click",function(){
    coustmise.style.display = "block"
    coustm.style.fontWeight = "500"
})

cls.addEventListener("click",function(){
    coustmise.style.display = "none"
})

relative.addEventListener("click",function(){
    nvbg.style.position = "relative"
})

fixed.addEventListener("click",function(){
    nvbg.style.position = "fixed"
})