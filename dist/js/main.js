const swiperWorks=new Swiper(".js-slider-works",{slidesPerView:"auto",spaceBetween:60,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"progressbar"},breakpoints:{1024:{slidesPerView:2,spaceBetween:30,slidesOffsetBefore:370,centeredSlides:!1},768:{slidesPerView:2,spaceBetween:30,slidesOffsetBefore:100,centeredSlides:!1}}}),swiperAbout=new Swiper(".js-slider-about",{effect:"cards",grabCursor:!0,loop:!0,navigation:{paginationClickable:!0,nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function hamburger(){const e=document.querySelector("#navArea"),t=document.querySelector(".toggle_btn"),s=document.querySelector("#mask");t.addEventListener("click",function(){e.classList.toggle("open"),t.classList.toggle("active")}),s.addEventListener("click",function(){e.classList.remove("open"),t.classList.remove("active")})}function customCursor(){var t,s,e;1024<window.outerWidth&&(t=document.querySelector(".follower"),s=document.querySelector(".cursor"),e=document.querySelectorAll("a"),gsap.set(t,{xPercent:-50,yPercent:-50}),gsap.set(s,{xPercent:-50,yPercent:-50}),document.onmousemove=function(e){gsap.to(s,{duration:.2,x:e.clientX,y:e.clientY,cursor:"none"}),gsap.to(t,{duration:.9,x:e.clientX,y:e.clientY})},e.forEach(e=>{e.addEventListener("mouseenter",()=>{s.classList.add("is-active"),t.classList.add("is-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("is-active"),t.classList.remove("is-active")})}))}hamburger(),customCursor(),window.addEventListener("resize",function(){customCursor()});class SpanWrap{constructor(e){this.target=this.convertElement(e),this.nodes=[...this.target.childNodes],this.convert()}convert(){let s="";this.nodes.forEach(e=>{if(3==e.nodeType){const t=e.textContent.replace(/\r?\n/g,"");s+=t.split("").reduce((e,t)=>e+`<span>${t}</span>`,"")}else s+=e.outerHTML}),this.target.innerHTML=s}convertElement(e){return e instanceof HTMLElement?e:document.querySelector(e)}}const targets=[...document.querySelectorAll(".js-span,.js-kv-spn,.js-kv-spn2")],home=(targets.forEach(e=>{new SpanWrap(e)}),document.querySelector(".shutter")),about=document.querySelector(".about"),works=document.querySelector(".works");if(home){let e=()=>{var e=document.querySelectorAll('a[href^="/#"]');const t=Array.prototype.slice.call(e);t.forEach(s=>{s.addEventListener("click",e=>{e.preventDefault();e=s.hash;const t=document.querySelector(e);e=window.pageYOffset+t.getBoundingClientRect().top;window.scrollTo({top:e,behavior:"smooth"})})})};e();const t=document.querySelectorAll(".js-trigger"),u=document.querySelectorAll(".js-span");t.forEach(e=>{gsap.fromTo(e,{y:100},{y:0,duration:2,ease:"power2.out",scrollTrigger:{trigger:e.querySelectorAll(".js-span"),start:"top center",onEnter:()=>e.classList.add("is-active"),onLeaveBack:()=>e.classList.remove("is-active"),markers:!0}}),u.forEach(e=>{gsap.to(e.querySelectorAll("span"),{opacity:1,duration:2,stagger:.07,scrollTrigger:{trigger:e,start:"top center",markers:!0}})})})}else if(about){const E=gsap.timeline();E.from(".gp-demo",{opacity:0,duration:3,y:"10%",ease:"Expo.easeOut"}).from(".gp-demo2",{opacity:0,duration:3,y:"10%",ease:"Expo.easeOut"},"<+=0.2").from(".gp-demo3",{opacity:0,duration:3,y:"10%",ease:"Expo.easeOut"},"<+=0.3")}else if(works){const F=gsap.utils.toArray(".js-demo");F.forEach(e=>{gsap.from(e,{opacity:0,duration:2,y:"30%",ease:"Power4.easeOut",scrollTrigger:{trigger:e,start:"top center"}})}),gsap.from(".js-demo-img",{opacity:0,y:"30%",stagger:.3,ease:"Power4.easeOut",duration:2,scrollTrigger:{trigger:".js-demo-img",start:"top center"}})}gsap.set(".parapara-top",{opacity:0}),gsap.set(".js-kv-spn span",{opacity:0}),gsap.set(".js-kv-spn2 span",{opacity:0}),gsap.set(".cir-sd",{opacity:0}),gsap.set(".js-span span",{opacity:0});const targetEl=document.querySelector(".content");targetEl.addEventListener("animationend",()=>{gsap.timeline().to(".js-kv-spn span",{opacity:1,duration:3,stagger:.07}).to(".js-kv-spn2 span",{opacity:1,duration:3,stagger:.03},"<+=0.01").to(".cir-sd",{opacity:1,duration:1,ease:"power4.inOut",y:"-20%"},"<+=3").to(".parapara-top",{opacity:1,duration:1,ease:"power4.inOut",y:"-10%"},"<+=0.01")});