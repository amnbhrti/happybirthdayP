document.addEventListener("DOMContentLoaded", function () {
    let heading = document.querySelector(".animated-text");

    // Blinking effect for the text
    setInterval(() => {
        heading.style.visibility = heading.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000);

    // Generate floating elements
    setInterval(createStrawberry, 800);
    setInterval(createBalloon, 1500);
    setInterval(createConfetti, 300);
});

// Function to create a floating strawberry 🍓
function createStrawberry() {
    const strawberry = document.createElement("div");
    strawberry.classList.add("strawberry");
    strawberry.innerHTML = "🍓";

    strawberry.style.left = Math.random() * window.innerWidth + "px";
    strawberry.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(strawberry);

    setTimeout(() => {
        strawberry.remove();
    }, 5000);
}

// Function to create a floating balloon 🎈
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.animationDuration = (Math.random() * 4 + 5) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 7000);
}

// Function to create falling confetti 🎊
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Music play/pause function
function toggleMusic() {
    let music = document.getElementById("bg-music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
