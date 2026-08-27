/*
    MIDNIGHT GARDEN

    Sayfa açıldığında:
    1. Gövde büyür
    2. Yapraklar çıkar
    3. Çiçek tomurcuğu belirir
    4. Yapraklar sırayla açılır
    5. Çiçeğin merkezi oluşur
    6. Ateş böcekleri hareket eder
*/


document.addEventListener("DOMContentLoaded", () => {

    /*
        İlk yükleme sınıfını kaldırıyoruz.
        CSS animasyonları bundan sonra aktif.
    */

    setTimeout(() => {

        document.body.classList.remove("not-loaded");
        document.body.classList.add("loaded");

    }, 100);


    /*
        Mobil cihazlarda kaydırmayı engelle.
    */

    document.addEventListener(
        "touchmove",
        event => {
            event.preventDefault();
        },
        {
            passive: false
        }
    );


    /*
        Çiçeklerin animasyonu bittikten sonra
        çok hafif bir canlılık veriyoruz.
    */

    const flowers =
        document.querySelectorAll(".flower");

    flowers.forEach((flower, index) => {

        flower.addEventListener(
            "animationend",
            event => {

                if (
                    event.animationName !==
                    "bloomAppear"
                ) {
                    return;
                }

                /*
                    Her çiçeğe farklı zamanlama.
                */

                flower.style.setProperty(
                    "--flower-delay",
                    `${index * 0.35}s`
                );

            }
        );

    });


    /*
        Ateş böceklerine küçük rastgele
        hareket farklılıkları.
    */

    const fireflies =
        document.querySelectorAll(".firefly");

    fireflies.forEach((firefly, index) => {

        const duration =
            4.5 +
            Math.random() * 3;

        const delay =
            Math.random() * 3;

        firefly.style.animationDuration =
            `${duration}s`;

        firefly.style.animationDelay =
            `${delay}s`;

    });

});
