// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { CustomEase } from 'gsap/CustomEase';

// gsap.registerPlugin(ScrollTrigger);


// ------------
// TOP>works-swiper
// ------------ 
const swiperWorks = new Swiper(".js-slider-works", {
    // 1023px以下の場合
    slidesPerView: 'auto',
	spaceBetween: 60,
    centeredSlides: true,
    // loop: true,
    // ページネーション
    pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
        type: 'progressbar' ,
    },
    //ブレイクポイント PC
    breakpoints: {
        // 1024px以上の場合
        1024: {
            slidesPerView: 2,   // スライド表示数２枚
            spaceBetween: 30,
            slidesOffsetBefore: 370,
            centeredSlides: false
        },
        // 768px以上の場合
        768: {
            slidesPerView: 2,   // スライド表示数２枚
            spaceBetween: 30,
            slidesOffsetBefore: 100,
            centeredSlides: false
        }

    }
});


// ------------
// TOP>about-swiper
// ------------
const swiperAbout = new Swiper(".js-slider-about", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    // <>ページナビ
    navigation: {
        paginationClickable: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    }

});




// ------------
// ALL_hamburger menu
// ------------
function hamburger() {
    const navArea = document.querySelector('#navArea'),
        btn = document.querySelector('.toggle_btn'),
        mask = document.querySelector('#mask');
        // open = document.querySelector('.open');

    // バーガーメニュー部分押したとき
    btn.addEventListener('click', function() {
        navArea.classList.toggle('open');
        btn.classList.toggle("active");
        console.log('hage')
    });

    // マスク部分押したとき
    mask.addEventListener('click', function() {
        navArea.classList.remove('open');
        btn.classList.remove("active");
    });

}
hamburger();



// -------------------
// ALL_custom　cursor
// -------------------
function customCursor() {
    // window=デバイスの横幅
    var winW = window.outerWidth;
    // console.log(winW);
    
    // PCかそれ以外かを区別するために数値設定
    var breakpoints = 1024;
    // もしデバイスの横幅が1024以上なら
    if( breakpoints < winW ) {
        var follow = document.querySelector(".follower");
        var cur = document.querySelector(".cursor");
        // querySelectorAll("a")　aタグすべて
        var links = document.querySelectorAll("a");
        // querySelectorAll("img")　※top>about>swiperのみ
        var links = document.querySelectorAll(".swiper-slide img");


        // カーソルの最初の位置指定
        gsap.set(follow, { xPercent: -50, yPercent: -50 });
        gsap.set(cur, { xPercent: -50, yPercent: -50 });
    
        // マウス動くたびに発火
        document.onmousemove = function(e) {
            // マウス動かすたびにX,Yを動かす。（オレンジ色と黒色の追従速度）
            gsap.to(cur, { duration: 0.2, x: e.clientX, y: e.clientY, cursor: "none" });
            gsap.to(follow, { duration: 0.9, x: e.clientX, y: e.clientY });
        };

        // aタグになるとカーソルが大きくなる、
        links.forEach(link => {
            link.addEventListener( "mouseenter", () => {
                cur.classList.add("is-active");
                follow.classList.add("is-active");
            });
            // 離れると小さくなるcssをActiveにする。
            link.addEventListener( "mouseleave", () => {
                cur.classList.remove("is-active");
                follow.classList.remove("is-active");
            });
        });
    }
}
// カスタムカーソルのjsを実行。
customCursor();

// リサイズされたタイミングでカスタムカーソルを実行。
window.addEventListener('resize',function(){
    customCursor();
});




// -----------------------
//ALL__条件分岐
// -----------------------
const home = document.querySelector(".shutter"); //TOP
const about = document.querySelector(".about"); //ABOUT
const works = document.querySelector(".works"); //WORKS
if(home) {

    // スムーススクロール記述　↓↓
    let smoothHomeAnchor =()=> {
        const anchorLinks = document.querySelectorAll('a[href^="/#"]');
        const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
        anchorLinksArr.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const targetId = link.hash;
                const targetElement = document.querySelector(targetId);
                const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });
            });
        });
    }
    // スムーススクロール記述 ↑↑
    smoothHomeAnchor();

} else if(about) {


} else if(works) {


};



// -------------
// ★gsap★
// TOPページ
// -------------
const items = gsap.utils.toArray('.js-trigger');
items.forEach((item) => {
    gsap.fromTo(item,
        {y: 10,},
        {y: 0,duration: 2,ease: 'power2.out',
            scrollTrigger: {
                trigger:  item,
                start: 'top center',
                onEnter: () => item.classList.add('is-active'),
                onLeaveBack: () => item.classList.remove('is-active'),
            }
        }
    );
});


// -------------
// ★gsap★
// ABOUT詳細ページ
// -------------
const tl = gsap.timeline();
tl.from(".gp-demo",{
        opacity:0,
        duration:3,
        y: "10%",
        ease: "Expo.easeOut"})

    .from(".gp-demo2",{
        opacity:0,
        duration: 3,
        y: "10%",
        ease: "Expo.easeOut"}, "<+=0.2")

    .from(".gp-demo3",{
        opacity:0,
        duration:3,
        y:"10%",
        ease: "Expo.easeOut"}, "<+=0.3");




// -------------
// ★gsap★
// WORKS詳細ページ
// -------------
const animes = gsap.utils.toArray('.js-demo');
animes.forEach((anime) => {
    gsap.from(anime,
        {
            opacity: 0,
            duration: 2,
            y: "30%",
            ease: "Power4.easeOut",
            scrollTrigger: {
                markers: true,
                trigger:  anime,
                start: 'top center'
            }
        }
        );
});

gsap.from(".js-demo-img",{
    opacity: 0,
    y: -100,
    stagger: 0.3, //0.5秒遅れてそれぞれ再生
    ease: "Power4.easeOut",
    duration: 2,
    scrollTrigger: {
        markers: true,
        trigger:  ".js-demo-img",
        start: 'top center'
    }
})