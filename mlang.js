let dataReload = document.querySelectorAll("[data-reload]");

let language = {
    en: {
        Ttl1: "Hello Guys!",
        Pr1: "This is a traduction test."
    },
    es: {
        Ttl1: "¡Holla Amigos!",
        Pr1: "Esto es un test de traducción."
    },
    pt: {
        Ttl1: "Olá Pessoal!"
    }
};

if(window.location.hash) {
    if (window.location.hash === "#es") {
        Title1.textContent = language.es.Ttl1;
        Par1.textContent = language.es.Pr1;
    } else if (window.location.hash === "#en") {
        Title1.textContent = language.en.Ttl1;
        Par1.textContent = language.en.Pr1;
    };
};

for (i = 0; i <= dataReload.lenght; i++){
    dataReload[i].onclick = function() {
        location.reload(true);
    };
};
    