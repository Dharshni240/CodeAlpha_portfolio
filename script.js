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
/* ==========================================
   ABOUT SECTION
========================================== */

section{
    padding:100px 10%;
}

.about-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.card{
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(15px);
    border:1px solid rgba(255,255,255,.1);
    border-radius:20px;
    padding:35px;
    text-align:center;
    transition:.4s;
}

.card i{
    font-size:50px;
    color:#3b82f6;
    margin-bottom:20px;
}

.card h3{
    margin-bottom:15px;
}

.card p{
    color:#cbd5e1;
    line-height:1.8;
}

.card:hover{
    transform:translateY(-12px);
    box-shadow:0 20px 40px rgba(59,130,246,.3);
}

/* ==========================================
   SKILLS
========================================== */

.skills-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:25px;
}

.skill-card{
    background:#1e293b;
    border-radius:18px;
    padding:35px;
    text-align:center;
    transition:.4s;
    cursor:pointer;
}

.skill-card i{
    font-size:50px;
    color:#3b82f6;
    margin-bottom:15px;
}

.skill-card:hover{
    transform:translateY(-10px) scale(1.05);
    background:#2563eb;
}

.skill-card:hover i{
    color:white;
}

/* ==========================================
   PROJECTS
========================================== */

.projects{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.project-card{
    background:#1e293b;
    padding:30px;
    border-radius:20px;
    transition:.4s;
}

.project-card h3{
    margin-bottom:15px;
}

.project-card p{
    color:#cbd5e1;
    margin-bottom:25px;
}

.project-card a{
    display:inline-block;
    margin-right:12px;
    margin-top:10px;
    padding:10px 18px;
    border-radius:30px;
    background:#3b82f6;
    color:white;
    text-decoration:none;
    transition:.3s;
}

.project-card a:hover{
    background:#8b5cf6;
}

.project-card:hover{
    transform:translateY(-10px);
    box-shadow:0 20px 40px rgba(59,130,246,.3);
}

/* ==========================================
   STATS
========================================== */

#stats{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:25px;
}

.counter{
    background:#1e293b;
    text-align:center;
    padding:40px;
    border-radius:18px;
}

.counter h2{
    color:#3b82f6;
    font-size:50px;
}

.counter p{
    margin-top:10px;
    color:#cbd5e1;
}

/* ==========================================
   CONTACT
========================================== */

form{
    max-width:700px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
}

form input,
form textarea{
    width:100%;
    padding:16px;
    border:none;
    border-radius:12px;
    background:#1e293b;
    color:white;
    outline:none;
}

form textarea{
    height:170px;
    resize:none;
}

form button{
    width:220px;
    align-self:center;
}

/* ==========================================
   FOOTER
========================================== */

footer{
    text-align:center;
    padding:30px;
    border-top:1px solid rgba(255,255,255,.1);
    color:#94a3b8;
}

/* ==========================================
   TOP BUTTON
========================================== */

#topBtn{
    position:fixed;
    right:25px;
    bottom:25px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#3b82f6;
    color:white;
    font-size:22px;
    cursor:pointer;
    display:none;
    transition:.3s;
}

#topBtn:hover{
    background:#8b5cf6;
}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

.nav-links a.active{
    color:#3b82f6;
}

/* ==========================================
   SCROLL REVEAL
========================================== */

.hidden-item{
    opacity:0;
    transform:translateY(60px);
    transition:all .8s ease;
}

.show-item{
    opacity:1;
    transform:translateY(0);
}

/* ==========================================
   MOBILE MENU
========================================== */

@media(max-width:768px){

.menu-btn{
    display:block;
}

.nav-links{
    position:absolute;
    top:80px;
    left:0;
    width:100%;
    background:#0f172a;
    flex-direction:column;
    align-items:center;
    max-height:0;
    overflow:hidden;
    transition:.4s;
}

.nav-links.show{
    max-height:350px;
    padding:20px 0;
}

.hero h1{
    font-size:42px;
}

.hero h2{
    font-size:24px;
}

.hero p{
    font-size:16px;
}

.hero-buttons{
    flex-direction:column;
}

.title{
    font-size:34px;
}

}
