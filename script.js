gsap.to("#header",{
    backgroundColor :"#1010107c",
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

var crsr = document.querySelector(".cur-t")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var crsrblr = document.querySelector(".cur-b")
document.addEventListener("mousemove",function(dets){
    crsrblr.style.left = dets.x -100 +"px"
    crsrblr.style.top = dets.y -100 +"px"
})