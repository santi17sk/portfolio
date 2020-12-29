(function(){
    // SCROLL
    const buttonUp = document.querySelector('#button-up');
    document.addEventListener('DOMContentLoaded', ()=>{
        buttonUp.addEventListener('click', scrollUp);
    } );

    function scrollUp(){
        const currentScroll = document.documentElement.scrollTop;
        if(currentScroll > 0){
            // que prepare la funcion scrollUp como una animacion
            window.requestAnimationFrame(scrollUp);
            // velocidad a la que sube al hacer click
            window.scrollTo(0, currentScroll - (currentScroll / 10));
        }
    }

    window.onscroll = function(){
        let scroll = document.documentElement.scrollTop;

        if(scroll > 500){
            buttonUp.style.transform = "scale(1)";
        }else if(scroll < 500){
            buttonUp.style.transform = "scale(0)";
        }
    }



})();