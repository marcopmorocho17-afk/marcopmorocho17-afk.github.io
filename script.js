 const colorOriginal = getComputedStyle(document.body).backgroundColor;

    let cambiado = false;

    function toggleColor() {
        if (!cambiado) {
            document.body.style.backgroundColor = 'black'; 
        } else {
            document.body.style.backgroundColor = colorOriginal; 
        }
        cambiado = !cambiado;
    }