/*
    BLOOM
    Mobil öncelikli küçük atmosfer efektleri
*/

const scene = document.querySelector(".scene");


// =========================================
// DOKUNMA / EKRAN KONTROLÜ
// =========================================

document.addEventListener(
    "touchmove",
    function (event) {
        event.preventDefault();
    },
    {
        passive: false
    }
);


// =========================================
// EKSTRA PARÇACIKLAR
// =========================================

const particleCount =
    window.innerWidth < 600 ? 14 : 24;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "floating-particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        20 + Math.random() * 65 + "%";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    particle.style.animationDuration =
        5 + Math.random() * 5 + "s";

    scene.appendChild(particle);
}


// =========================================
// PARÇACIK CSS
// =========================================

const style =
    document.createElement("style");

style.textContent = `

.floating-particle {

    position: absolute;

    width: 2px;
    height: 2px;

    border-radius: 50%;

    background: rgba(205,215,165,.45);

    box-shadow:
        0 0 7px
        rgba(220,220,160,.45);

    pointer-events: none;

    animation:
        particleMove
        ease-in-out
        infinite;

}

@keyframes particleMove {

    0% {

        opacity: 0;

        transform:
            translate3d(0,20px,0)
            scale(.5);

    }

    30% {

        opacity: .7;

    }

    60% {

        opacity: .3;

    }

    100% {

        opacity: 0;

        transform:
            translate3d(12px,-45px,0)
            scale(1.2);

    }

}

`;

document.head.appendChild(style);


// =========================================
// İLK AÇILIŞ
// =========================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);