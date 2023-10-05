var pass1 = document.querySelector("#pass2")
var pass2 = document.querySelector("#pass2-1")
var pass3 = document.querySelector("#pass3")
var pass4 = document.querySelector("#pass5")
var pass5 = document.querySelector("#pass8")

var hide1 = document.querySelector(".hide")
var sh = document.querySelector(".pass")


pass1.addEventListener("click",function(){
     pass1.style.display = "none"
     pass2.style.display = "block"
     bt2.innerHTML = "2"
})

pass2.addEventListener("click",function(){
     pass3.style.display = "block"
     btn3.style.display = "none"
     bt2.innerHTML = "2"
})

pass3.addEventListener("click",function(){
     pass4.style.display = "block"
     btn5.style.display = "none"
     bt3.innerHTML = "3"
})

pass4.addEventListener("click",function(){
     submit.style.display = "none"
     mainlink.style.display = "block"
     bt5.innerHTML = "5"
})