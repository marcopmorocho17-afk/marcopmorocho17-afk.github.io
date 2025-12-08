 let colorOriginal = document.body.style.backgroundColor;

    function cambiar() {
        document.body.style.backgroundColor = 'gold';
    }

    function restaurar() {
        document.body.style.backgroundColor = colorOriginal;
    }