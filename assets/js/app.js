(function(){
    document.addEventListener('DOMContentLoaded', () => {
        animacionPalabra();
    });

    window.addEventListener('scroll', ()=> {
        const fadeInLeft = {clase1: 'animate__animated', clase2: 'animate__fadeInLeft'};
        const fadeInUp = {clase1: 'animate__animated', clase2: 'animate__fadeInUp'};
        const zoomIn = {clase1: 'animate__animated', clase2: 'animate__zoomIn'};

        // SOBRE MI
        animacionSecciones('#sobre-mi', 1, fadeInLeft);
        animacionSecciones('#body-sobre-mi', 1, fadeInLeft);
        animacionSecciones('#skills', 1, fadeInUp);

        // HABILIDADES
        animacionSecciones('#habilidades', 1, zoomIn);
        animacionSecciones('#programming', 1, fadeInUp);
        animacionSecciones('.card', 1, zoomIn);

        // PROYECTOS
        animacionSecciones('#proyectos', 1, fadeInLeft);
        animacionSecciones('.card-proyecto', 1, zoomIn);
    });

    function animacionPalabra(){
        const typed = new Typed('.animacion', {
                stringsElement: '#cadenas',
                smartBackspace: false,
                startDelay: 500,
                typeSpeed: 75,
                backDelay: 1000,
                loop: false,
                showCursor: true,
        });
    }
    
    function animacionSecciones(id, altura, clases){

        if(id === '.card' || id === '.card-proyecto'){
            const elementos = document.querySelectorAll(id);
            elementos.forEach(elemento => {
                
                const posicionObj = elemento.getBoundingClientRect().top;
                let tamanoPantalla = window.innerHeight / altura;
                if(posicionObj < tamanoPantalla){
                    // alert('aparece');
                    const {clase1, clase2} = clases;

                    elemento.classList.add(clase1, clase2);
                }
            });
            return;
        }

        const elemento = document.querySelector(id);
        const posicionObj = elemento.getBoundingClientRect().top;
        // console.log(posicionObj);

        // tamaño de pantalla dinamicamente
        let tamanoPantalla = window.innerHeight / altura;
        // console.log(tamanoPantalla);

        if(posicionObj < tamanoPantalla){
            // alert('aparece');
            const {clase1, clase2} = clases;
            elemento.classList.add(clase1, clase2);
        }
    }
})()