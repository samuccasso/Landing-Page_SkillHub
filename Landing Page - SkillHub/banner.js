let bannerAtual = 0;

const banners = document.querySelectorAll(".banner-slide");
const bolinhas = document.querySelectorAll(".banner-dot");


function mostrarBanner(numero) {

    banners.forEach((banner) => {
        banner.classList.remove("active");
    });

    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove("active");
    });

    banners[numero].classList.add("active");
    bolinhas[numero].classList.add("active");

    bannerAtual = numero;
}


function mudarBanner(direcao) {

    bannerAtual += direcao;

    if (bannerAtual >= banners.length) {
        bannerAtual = 0;
    }

    if (bannerAtual < 0) {
        bannerAtual = banners.length - 1;
    }

    mostrarBanner(bannerAtual);
}


function irParaBanner(numero) {
    mostrarBanner(numero);
}


/* PASSAGEM AUTOMÁTICA */

setInterval(() => {
    mudarBanner(1);
}, 5000);


/* =========================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================= */

const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("visible");

                observer.unobserve(elemento.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosReveal.forEach((elemento) => {
    observer.observe(elemento);
});