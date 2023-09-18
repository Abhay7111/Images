var navclick1 = document.querySelector("#li4")
var openul = document.querySelector("#ul2")
var close = document.querySelector("#close")

navclick1.addEventListener("click", function(){
    openul.style.display = "block"
    openul.style.backgroundColor = "rgb(74, 74, 74)"
},2000)
navclick1.addEventListener("hover", function(){
    openul.style.display = "block"
    openul.style.backgroundColor = "rgb(74, 74, 74)"
},2000)

close.addEventListener("click",function(){
    openul.style.display = "none"
})