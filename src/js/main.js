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
    // PCかそれ以外かを区別するために数値設定
    var breakpoints = 1024;
    // もしデバイスの横幅が1024以上なら
    if( breakpoints < winW ) {
        var follow = document.querySelector(".follower");
        var cur = document.querySelector(".cursor");
        // querySelectorAll("a")　aタグすべて
        var links = document.querySelectorAll("a");
        // querySelectorAll("img")　※top>about>swiperのみ
        // var links = document.querySelectorAll(".swiper-slide img");


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
    

    // gsap scrollTrigger記述　↓↓
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
    // gsap scrollTrigger記述　↑↑
    
    } else if(about) {

        // gsap about ふわっと現れる記述　↓↓
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
        // gsap about ふわっと現れる記述　↑↑
            
            


    } else if(works) {
        // gsap works スクロール×ふわっと現れる記述　↓↓
        const animes = gsap.utils.toArray('.js-demo');
        animes.forEach((anime) => {
            gsap.from(anime,
                {
                    opacity: 0,
                    duration: 2,
                    y: "30%",
                    ease: "Power4.easeOut",
                    scrollTrigger: {
                        trigger:  anime,
                        start: 'top center'
                    }
                }
                );
            });
        // gsap works スクロール×ふわっと現れる記述　↑↑


        // gsap works img×スクロール×ふわっと現れる記述　↓↓
        gsap.from(".js-demo-img",{
            opacity: 0,
            y: "30%",
            stagger: 0.3,
            ease: "Power4.easeOut",
            duration: 2,
            scrollTrigger: {
                trigger:  ".js-demo-img",
                start: 'top center'
            }
        })
        // gsap works img×スクロール×ふわっと現れる記述　↑↑

};
// -----------------------
//ALL__条件分岐＿＿end
// -----------------------








// -----------------------
//ALL__span化
// -----------------------

class SpanWrap {
    constructor(target) {
  
      this.target = this.convertElement(target);
      this.nodes = [...this.target.childNodes];
  
      this.convert();
    }
  
    convert() {
  
      let spanWrapText = ""
  
      this.nodes.forEach((node) => {
        if (node.nodeType == 3) {//テキストの場合
          const text = node.textContent.replace(/\r?\n/g, '');//テキストから改行コード削除
          //spanで囲んで連結
          spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
            return acc + `<span>${v}</span>`
          }, "");
        } else {//テキスト以外
          //<br>などテキスト以外の要素をそのまま連結
          spanWrapText = spanWrapText + node.outerHTML
        }
      })
  
      this.target.innerHTML = spanWrapText
  
    }
    //jQueryオブジェクトや文字列セレクターを変換
    convertElement(element) {
        if (element instanceof HTMLElement) {
          return element
        }
        // if (element instanceof jQuery) {
        //   return element[0]
        // }
        return document.querySelector(element);
      }
}
//実行
const targets = [...document.querySelectorAll(".js-span,.js-kv-spn,.js-kv-spn2")]
targets.forEach( (target) => {
  new SpanWrap(target);
})





// -----------------------
//ALL__spanをgsapに
// -----------------------
//kana takahashiを動かす
gsap.from(".js-kv-spn span", {
    opacity: 0,
    stagger: 0.1,
    ease: "Power4.easeIn",
    duration: 1,
    delay: 0.5, //アニメーションが開始されるまで
  });



//   const tx = gsap.timeline();
//   tx.from(".js-kv-spn spn",{
//           opacity:0,
//           duration:3,
//           y: "10%",
//           stagger: 0.3,
//           ease: "Expo.easeOut"})

//       .from(".js-kv-spn2 spn",{
//           opacity:0,
//           duration: 3,
//           y: "10%",
//           stagger: 0.3,
//           ease: "Expo.easeOut"}, "<+=0.2")






// ブラッシュアップ予定、span化した各タイトルをstaggerでアニメーションする↓↓
// const titles = gsap.utils.toArray('.js-span');
// // const titles = [...document.querySelectorAll('.js-span')];

// titles.forEach((title) => {
//     // const spans = gsap.utils.toArray('.js-span span');
//     // const spans = title.document.querySelectorAll('span');
//     console.log(title);
    

//     gsap.from(title,
//         {
//             // delay: 1, //アニメーションが開始されるまで
//             // duration: 1.5, //アニメーションの長さ
//             // opacity: 0,
//             // stagger: 0.3,
//             // ease: "Power4.easeOut",
            
//             scrollTrigger: {
//                 trigger:  title,
//                 start: 'top center',
//                 onEnter: () => gsap.from(title.document.querySelectorAll('span'), {
//                     delay: 1, 
//                     duration: 1.5, //アニメーションの長さ
//                     opacity: 0,
//                     stagger: 0.3,
//                     ease: "Power4.easeOut",
//                 }),
//                 markers: true
//             }
//         }
//     );

//     // spans.forEach((span) => {
//     //     console.log(span);

//     //     gsap.from(span,
//     //     {
//     //         delay: 1, //アニメーションが開始されるまで
//     //         duration: 1.5, //アニメーションの長さ
//     //         opacity: 0,
//     //         stagger: 0.3,
//     //         ease: "Power4.easeOut",

//     //         scrollTrigger: {
//     //             trigger:  ".section-wrap",
//     //             start: 'top center',
//     //             markers: true
//     //         }
//     //     });
//     // })
// });
