var tl=gsap.timeline({scrollTrigger:{
    trigger:"#page-2",
    scrub:true,
    start:"0% 95%",
    end:"55% 50%",
    // markers:true
}})

tl.to("#fanta",{
    top:"105%",
    left:"0%"
},'oranged')
tl.to("#orange-cut",{
    top:"145%",
    left:"20%"
},'oranged')
tl.to("#orange",{
    width:"15%",
    top:"165%",
    left:"70%",
},'oranged')
tl.to("#leaf1",{
    top:"110%",
    left:"72%",
    rotate:"130deg"
},'oranged')
tl.to("#leaf2",{
    top:"107%",
    left:"0%",
    rotate:"130deg"
},'oranged')

// start of triggering of part3
var tl1=gsap.timeline({scrollTrigger:{
    trigger:"#page-3",
    scrub:true,
    start:"0% 95%",
    end:"50% 50%",
    // markers:true
}})
tl1.from("#lemon-1",{
    rotate:"180deg",
    left:"-50%",
    top:"50%"
},'coldrinks')
tl1.from("#cocola",{
    rotate:"-90deg",
    left:"-50%",
    top:"50%"
},'coldrinks')
tl1.from("#lemon-2",{
    rotate:"180deg",
    left:"120%",
    top:"60%"
},'coldrinks')
tl1.from("#pepsi",{
    rotate:"90deg",
    left:"120",
    top:"50%"
},'coldrinks')
tl1.to("#fanta",{
    top:"219%",
    left:"28%",
    width:"47%"
},'coldrinks')
tl1.to("#orange-cut",{
    top:"205%",
    left:"37%",
    width:"16%"
},'coldrinks')
