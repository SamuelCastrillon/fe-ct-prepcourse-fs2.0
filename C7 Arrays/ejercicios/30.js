function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var ArrayNumeros = numeros.sort()
  
  
  for (var i=0; i<ArrayNumeros.length; i++){
    

    if(ArrayNumeros[i]===ArrayNumeros[(i+1)]){
      return ArrayNumeros[i]
    }
  
  }

}
encontrarElementoRepetido([1,8,5,3,9,4,6,7,3,2,])
module.exports = encontrarElementoRepetido;