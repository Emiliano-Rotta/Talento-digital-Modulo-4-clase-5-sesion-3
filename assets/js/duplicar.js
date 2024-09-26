export function duplicarArray(numeros){
    var duplicado = [];
    for (let i = 0; i < numeros.length; i++) {
        duplicado.push(numeros[i]*2)
        
    }
    return duplicado
}