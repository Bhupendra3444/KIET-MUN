gsap.registerPlugin(ScrollTrigger);

if (screen.width > 414) {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      scrub: 2,
      pin: "#main",
    },
  });

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      scrub: 2,
      pin: "#main",
    },
  });

  console.log("OK" + " " + screen.width);
  t.to("#videoplayer", { width: "100%", ease: "Expo.easeInOut" });

  t1.to(
    ".videoplayer-center-text",
    { opacity: "1", ease: "Expo.easeInOut", visibility: "visible" },
    0.3
  );
}

// gsap.to(
//   ".videoplayer-center-text",
//   {
//     scrollTrigger: {
//       trigger: "#main",
//       start: "top top",
//       scrub: 1,
//     },
//     opacity: 1,
//     ease: "Expo.easeInOut",
//   },
//   1000
// );

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-600%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#holder1", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-300%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#six", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-600%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

gsap.to("#holder2", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-300%",
  ease: "Expo.easeInOut",
  opacity: 0,
});

anime.timeline().add({
  targets: [".header, .header-sec", ".header-text"],
  opacity: [0, 1],
  translateY: [80, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 300 + 40 * i,
});

document.getElementById("vid").play();

var countDownDate = new Date("Jan 22, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
