let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

gsap.to(box1, {
  y: 200,
  x: 100,
  rotation: 360,
  duration: 3,
  ease: "power2.out",
});

gsap.to(box2, {
  x: 200,
  y: 100,
  rotation: 360,
  duration: 10,
  ease: "power2.out",
});
