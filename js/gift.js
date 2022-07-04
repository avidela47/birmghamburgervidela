let abrir = document.querySelectorAll('#boton-gift')[0];
let confirm = document.querySelectorAll('confirmButtonText')[0]

abrir.addEventListener("click", function(){
    Swal.fire({
        title: 'GIFT CARDS!',
        text: 'GIFT CARDS 20% OFF en cualquier combo que elijas - Un regalo que los dejará con la boca abierta!',
        imageUrl: "./assets/img/combo.png",
        imageWidth: 450,
        imageHeight: 250,
        confirmButtonText: 'Reclama, Tu Gift Card!',
        confirmButtonColor: 'rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(to bottom right, #f80202, #fcba05, #da0d85)',
    })
}); 

