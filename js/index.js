 // Al hacer clic en un módulo, muestra una alerta
    const modulos = document.querySelectorAll('#modulos li');

    modulos.forEach((modulo) => {
        modulo.addEventListener('click', () => {
            alert(`Has seleccionado: ${modulo.textContent}`);
        });
    });

// Efecto de bienvenida
    window.addEventListener('load', () => {
        console.log("Página cargada correctamente");
    });