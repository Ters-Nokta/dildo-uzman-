document.addEventListener("DOMContentLoaded", () => {

    const messageButton = document.getElementById("messageButton");
    const message = document.getElementById("message");

    let opened = false;

    messageButton.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        messageButton.classList.add("hidden");

        setTimeout(() => {
            message.classList.add("show");
        }, 350);

        createGoldenParticles();
    });


    const fireflies = document.querySelectorAll(".fireflies span");

    fireflies.forEach((firefly) => {

        const x = random(-30, 30);
        const y = random(-35, 15);

        firefly.style.setProperty("--x", `${x}px`);
        firefly.style.setProperty("--y", `${y}px`);

        const delay = random(0, 5000);

        firefly.style.animationDelay = `${delay}ms`;
    });


    document.addEventListener("pointerdown", (event) => {

        if (
            event.target === messageButton ||
            messageButton.contains(event.target)
        ) {
            return;
        }

        createTapGlow(
            event.clientX,
            event.clientY
        );
    });

});


function createGoldenParticles() {

    const container = document.querySelector(".scene");

    for (let i = 0; i < 18; i++) {

        const particle = document.createElement("span");

        particle.style.position = "absolute";
        particle.style.left = "50%";
        particle.style.bottom = "10%";

        const size = random(2, 5);

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.borderRadius = "50%";

        particle.style.background = "#fff0a0";

        particle.style.boxShadow =
            "0 0 8px rgba(255,230,110,.9)";

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "120";

        const angle = random(-70, 70);
        const distance = random(40, 150);

        particle.animate(
            [
                {
                    transform: "translate(-50%, 0) scale(.2)",
                    opacity: 0
                },
                {
                    transform: `translate(
                        calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px),
                        -${Math.cos(angle * Math.PI / 180) * distance}px
                    ) scale(1)`,
                    opacity: 1
                },
                {
                    transform: `translate(
                        calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance * 1.4}px),
                        -${Math.cos(angle * Math.PI / 180) * distance * 1.4}px
                    ) scale(.1)`,
                    opacity: 0
                }
            ],
            {
                duration: random(1400, 2300),
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2400);
    }
}


function createTapGlow(x, y) {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    glow.style.width = "5px";
    glow.style.height = "5px";

    glow.style.borderRadius = "50%";

    glow.style.background = "#fff1a0";

    glow.style.boxShadow =
        "0 0 8px #ffe46d, 0 0 18px rgba(255,220,90,.7)";

    glow.style.pointerEvents = "none";
    glow.style.zIndex = "999";

    document.body.appendChild(glow);

    glow.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(.3)",
                opacity: .9
            },
            {
                transform: "translate(-50%, -50%) scale(2.8)",
                opacity: 0
            }
        ],
        {
            duration: 650,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        glow.remove();
    }, 700);
}


function random(min, max) {
    return Math.random() * (max - min) + min;
}
