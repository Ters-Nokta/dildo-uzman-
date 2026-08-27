document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("ready");


    /*
        Her küçük bitkiye hafif farklı
        animasyon süresi veriyoruz.
    */

    const plants =
        document.querySelectorAll(".plant");

    plants.forEach((plant, index) => {

        const stem =
            plant.querySelector(".stem");

        const bloom =
            plant.querySelector(".small-bloom");

        const duration =
            1.8 + (index % 4) * .18;

        const delay =
            .45 + index * .12;

        stem.style.animationDuration =
            `${duration}s`;

        stem.style.animationDelay =
            `${delay}s`;

        bloom.style.animationDelay =
            `${delay + 1.55}s`;
    });


    /*
        Ateş böcekleri birbirinden farklı
        hareket etsin.
    */

    const fireflies =
        document.querySelectorAll(".fireflies i");

    fireflies.forEach((fly, index) => {

        const duration =
            4.5 + Math.random() * 3;

        const delay =
            Math.random() * 3;

        fly.style.animationDuration =
            `${duration}s`;

        fly.style.animationDelay =
            `${delay}s`;
    });


    /*
        Sayfa yüklenirken hafif fade-in.
    */

    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });

});
