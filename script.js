/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed('.typedText', {
	strings: ['Designer', 'Web Developer', 'Software Engineer'],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: true,
});

/* -- HOME -- */
sr.reveal('.featured-text-card', { delay: 100 });
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 100 });
sr.reveal('.featured-text-btn', { delay: 100 });
sr.reveal('.social_icons', { delay: 100 });
sr.reveal('.featured-image', { delay: 100 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
	origin: 'left',
	distance: '80px',
	duration: 2000,
	reset: true,
});

srLeft.reveal('.about-info', { delay: 200 });
srLeft.reveal('.contact-info', { delay: 200 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
	origin: 'right',
	distance: '80px',
	duration: 2000,
	reset: true,
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);
