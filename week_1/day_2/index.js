let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

gsap.to(box1, {
  scaleX: 2,
  rotation: 360,
  duration: 3,
  ease: "power2.out",
});

gsap.to(box2, {
  delay: 5,
  rotationX: 360,
  skewX: 360,
});
