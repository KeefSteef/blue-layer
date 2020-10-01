
gsap.to('.scroll',{
    scrollTrigger:{
        trigger:'.scroll',
        toggleActions: "restart"
    },
    x:0,
    duration:.5

})

document.querySelector('.scroll').addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


gsap.from('.offers__title h2',{
    scrollTrigger:{
        trigger:'.card__info-title'
    },
    opacity:0
})