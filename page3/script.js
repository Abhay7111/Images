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
var button19 = document.querySelector("#button19")
var button20 = document.querySelector("#button20")
var button5 = document.querySelector("#button5")
var button6 = document.querySelector("#button6")
var button7 = document.querySelector("#button7")
var button8 = document.querySelector("#button8")
var button9 = document.querySelector("#button9")
var button10 = document.querySelector("#button10")
var button11 = document.querySelector("#button11")
var button12 = document.querySelector("#button12")
var button13 = document.querySelector("#button13")
var button14 = document.querySelector("#button14")
var button15 = document.querySelector("#button15")
var button16 = document.querySelector("#button16")
var button17 = document.querySelector("#button17")
var button18 = document.querySelector("#button18")
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
    nvbg.style.backgroundColor = "#fff"
})

button4.addEventListener("click",function(){
    nvbg.style.borderBottom = "transparent"
})

button19.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#071952"
})

button20.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#088395"
})

button5.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#35A29F"
})

button6.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#F2F7A1"
})

button7.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#451952"
})

button8.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#662549"
})

button9.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#AE445A"
})

button10.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#F39F5A"
})

button11.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#793FDF"
})

button12.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#7091F5"
})

button13.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#97FFF4"
})

button14.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#435334"
})

button15.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#9EB384"
})

button16.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#CEDEBD"
})

button17.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#FAF1E4"
})

button18.addEventListener("click",function(){
    nvbg.style.backgroundColor = "#EBE76C"
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