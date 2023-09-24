gsap.to("#header",{
    backgroundColor :"#000",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        // markers:"true",
        start:"top -50px",
        end:"top -1px",
        scrub:2,
        top:"120px",
    },
})

gsap.to("#page2",{
    backgroundColor:"rgb(27, 27, 27)",
    width:"100%",
    duration:1,
    top:"0px",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:"true",
        start:"-1200px",
        end:"-950px",
        scrub:2,
    }
})


var h1 = document.getElementById("page1-h1")
h1.addEventListener("click",function(){
    h1.innerHTML = "Stunning royalty-free images & Customise webpage"
    // h1.style.color = "red"
})

var chan = document.querySelector(".text>h1")
var btn = document.querySelector(".page1-buttons")

btn.addEventListener("click",function(){
    chan.innerHTML = "Changed"
})


var navclick = document.querySelector(".design-hover-open")
var openul = document.querySelector(".open-ul")

navclick.addEventListener("click",function(){
    openul.style.display = "block"
})

var close1 = document.getElementById("close")
var close = document.getElementsByClassName("ri-close-fill")
close.addEventListener("click",function(){
close1.style.display = "none"
})