// sample
const animes = gsap.utils.toArray('.js__demo');
animes.forEach((anime) => {
    gsap.from(anime,
        {
            opacity: 0,
            duration: 3,
            x: "30%",
            ease: "Power4.easeOut",
            scrollTrigger: {
                trigger:  item,
                start: 'top center',
                onEnter: () => item.classList.add('is-active'),
                onLeaveBack: () => item.classList.remove('is-active'),
            }
        }
        );
});
