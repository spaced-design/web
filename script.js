// 프로필 클릭 시 애니메이션 추가
function toggleProfile() {
    const profilecard = document.querySelector('.profile-card');
    const background = document.querySelector('.background');

    profilecard.classList.toggle('clicked');
    background.style.filter = 'none';
}

// 캔버스를 이용한 도트 애니메이션
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 6 + 4;
        this.speed = Math.random() * 3 + 5;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = Math.random() * -canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160, 160, 160, 0.9)";
        ctx.fill();
    }
}

const colors = [
    'rgba(121, 121, 121, 0.9)',
];

this.color = colors[Math.floor(Math.random() * colors.length)];

function initParticles() {
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


let isDown = false;
let startY;
let scrollTop;


const container = document.querySelector('.container');

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startY = e.pageY - container.offsetTop;
    scrollTop = container.scrollTop;
});


container.addEventListener('mousemove', () => {
    isDown = false;
    container.classList.remove('active');
});



container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = (y - startY) * 3;
    container.scrollTop = scrollTop - walk;
});



/* 스크롤 박스 이벤트 */
document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');

    window.addEventListener('scroll', () => {
        const boxPosition = box.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        //다시 화면밖으로 나갈떄
        if (boxPosition < windowHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
    )
});





/* 스크롤 박스 이벤트 */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".box-container");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const triggerPoint = window.innerHeight * 0.9; // 화면의 60% 높이에서 실행

        if (scrollY > triggerPoint) {
            container.classList.add("show");
        }
    });
});
