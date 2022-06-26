let modalC = document.querySelectorAll('.modal-container') [0];
let abrir = document.querySelectorAll('#boton-registro') [0];
let cerrar = document.querySelectorAll('#giftCerrar') [0];
let modal = document.querySelectorAll('.modal-close') [0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity ="1";
    modalC.style.visibility = "visible";
    modal.classList.toggle('modal-close');

});

cerrar.addEventListener("click", function(e){
    modal.classList.toggle('#giftCerrar');

    setTimeout(function(){
        modalC.style.opacity ="0";
        modalC.style.visibility = "hidden";
    })
});