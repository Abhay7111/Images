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
