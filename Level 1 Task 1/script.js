//------Gsap Animation Seaction //
//----------Home Animation
gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin);
gsap.from("#home-overlay-img", {
  y: 500,
  duration: 0.7,
});
const home = gsap.timeline();
home
  .from(".home span", {
    x: 700,
    stagger: 0.1,
  })
  .from(".buy-now", {
    opacity: 0,
  });
//----------ABout Animation
const about = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: "top 30%",
  },
});
about
  .from(".about-left h1", {
    duration: 0.4,
    x: -500,
  })
  .from(".about img", {
    duration: 0.4,
    x: 700,
  })
  .from(".about-left > button", {
    opacity: 0,
    duration: 0.7,
    scale: 0,
    display: "none",
  });
//----------specs Animation
const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".specs",
    scroller: "body",
    start: "top 50%",
  },
});
t3.from(".odd", {
  x: 900,
  stagger: 0.4,
});
t3.from(".specs-img", {
  opacity: 0,
});
t3.from(".even", {
  x: -900,
  stagger: 0.4,
});

//  SWiper JS -> Favrites //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1700,
    disabledOnInteraction: true,
  },
  breakpoints: {
    728: {
      slidesPerView: 3,
    },
  },
});

// mobile menu/navbar
const btnOpen = document.querySelector(".mobile-overlay-open");
const btnClose = document.querySelector(".mobile-overlay-close");
const overlay = document.querySelector(".mobile-overlay");
const mobileListItems = document.querySelectorAll(".mobile-overlay ul li");
btnOpen.addEventListener("click", () => {
  gsap.from(overlay, {
    y: -1000,
    scale: 1,
  });
  gsap.to(overlay, {
    display: "block",
    scale: 1,
  });
  btnOpen.style.display = "none";
});
btnClose.addEventListener("click", () => {
  gsap.to(overlay, {
    display: "none",
    scale: 0,
  });
  btnOpen.style.display = "block";
});
mobileListItems.forEach((e) => {
  e.addEventListener("click", () => {
    btnOpen.style.display = "block";
    gsap.to(overlay, {
      display: "none",
      scale: 0,
    });
  });
});

// cursor //

const cursor = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.pageX,
    y: e.pageY,
  });
});

document.querySelectorAll("img").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1.5,
      opacity: 0.4,
      zIndex: 100,
    });
  });
});
document.querySelectorAll("img").forEach((e) => {
  e.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      zIndex: "inherit",
    });
  });
});
