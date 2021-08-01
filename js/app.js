var tl = gsap.timeline({
	defaults: { duration: 1.5, delay: 0.2 }
});

tl.to(".png", {
	x: "random(-50, 50, 5)",
	y: "random(-50, 50, 5)",
	repeat: -1,
	yoyo: true,
	repeatRefresh: true
});