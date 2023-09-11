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
