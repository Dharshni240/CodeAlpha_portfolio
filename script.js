// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s";
    }, 1200);
});

// ===============================
// TYPING EFFECT
// ===============================

const words = [
    "AI & ML Student",
    "Web Developer",
    "Python Programmer",
    "UI / UX Designer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===============================
// SCROLL PROGRESS BAR
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter h2");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 80;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
".card,.skill-card,.project-card,.counter,form"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-item");

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(item => {

    item.classList.add("hidden-item");

    revealObserver.observe(item);

});

// ===============================
// COPY EMAIL
// ===============================

const email = document.getElementById("email");

if (email) {

    email.addEventListener("click", () => {

        navigator.clipboard.writeText(email.innerText);

        alert("Email copied!");

    });

}

// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});
