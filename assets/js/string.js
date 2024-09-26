const stringMasLargo = (str) =>{
    let stringLargo = ""
    for (const element of str) {
        if (element.length > stringLargo.length){
            stringLargo = element
        }
        
    }
    return stringLargo
}

export {
    stringMasLargo
}