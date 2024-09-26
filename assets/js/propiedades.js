const mostrarPropiedades = (propiedad) => {
    for (const key in propiedad) {
        console.log(`${key}: ${propiedad[key]}`)
    }
}

export {
    mostrarPropiedades
}