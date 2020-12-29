(function(){
    document.addEventListener('DOMContentLoaded', animacionPalabra);

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
})()