var tl = gsap.timeline();

tl
.from("#img1",{
    x:-100,
    opacity:0,
    duration:1.5,
    ease : Expo.easeIn
})
.from("#baar-code",{
    x:-100,
    opacity:0,
    stagger:1,
    duration:1,
    ease : Back.ease
},'-=0.5')

function part(){

 gsap.from("#part1,#part2-up,#part2-down,#part3, #page2 h1",{
        scrollTrigger:{
            trigger : "#page2",
            scurb: 0.5,
            start : "top 54%",
            // markers : true
        },
                 x:-30,
                 opacity:0,
                 duration:0.5,
                 stagger: 0.5,
                 ease : Back.ease
})
}
part()

function text(){

    gsap.from("#page3-part p, #page3-part h1, #one,#two,#step-area #img",{
           scrollTrigger:{
               trigger : "#page3",
               scurb: 0.5,
               start : "top 80%",
               // markers : true
           },
                    x:-30,
                    opacity:0,
                    duration:0.5,
                    stagger: 0.5,
                    ease : Back.ease
   })
   gsap.from("#page4-left h1,#page4-left p, #text-area",{
    scrollTrigger:{
        trigger : "#page4",
        scurb: 0.5,
        start : "top 80%",
        // markers : true
    },
             x:-30,
             opacity:0,
             duration:0.5,
             stagger: 0.5,
             ease : Back.ease
})
}
text()

gsap.to("#overflow2",{
    scrollTrigger:{
        trigger: "#one",
        start : "top 40%",
        // markers : true
    },
    duration: 6,
    top : "-45%",
    ease : "none.none"
})
gsap.to("#tick2",{
    scrollTrigger:{
        trigger: "#one",
        // pin:"#tick",
        start : "top 40%",
        // markers : true
    },
    duration: 0.5,
    delay: 6,
    y : 140,
    
    
})
gsap.to("#tick3",{
    scrollTrigger:{
        trigger: "#one",
        // pin:"#tick",
        start : "top 40%",
        // markers : true
    },
    delay: 6,
    opacity : 1
})
gsap.to("#overflow",{
    scrollTrigger:{
        trigger: "#one",
        start : "top 40%",
        // markers : true
    },
    duration: 6,
    delay: 7,
    top : "0%",
    ease : "none.none"
})
gsap.to("#tick",{
    scrollTrigger:{
        trigger: "#one",
        // pin:"#tick",
        start : "top 40%",
        // markers : true
    },
    duration: 0.5,
    delay: 12,
    y : 135,
})
