/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
   
  var arrayObjeto = []
  
  for (let clave in objeto){

    arrayObjeto.push([clave,objeto[clave]])

  }
  return arrayObjeto;
}
deObjetoAarray({D: 1, B: 2, C: 3})

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var stringOrdenado = string.split('').sort().join('')

  var arrayTep = []
  
  var objeto = {}

  console.log(stringOrdenado)

  for (var i = 0; i<stringOrdenado.length; i++){

    arrayTep.push(stringOrdenado[i])

    if (stringOrdenado[i] !== stringOrdenado[i+1]){
      objeto[stringOrdenado[i]] = arrayTep.length;
      arrayTep = [];
    }

  }

  console.log(objeto)
  return objeto

}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var ArrayString = string.split('')

  var Minusculas = '';

  var Mayusculas = '';


  ArrayString.forEach(a => {
    
    if (a === a.toLowerCase()){
        Minusculas += a
    }
    else {
        Mayusculas += a
    }
  })
  
  return Mayusculas+Minusculas;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var ArregloFrase = frase.split(' ')

  ArregloFrase = ArregloFrase.map(a => {
    return a.split('').reverse().join('')
    
  })

  console.log(ArregloFrase.join(' '))
  return ArregloFrase.join(' ')

}
asAmirror("The Henry Challenge is close!")

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:



}




function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}
sortArray(["You", "are", "beautiful", "looking"])
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var ArraysOrdenados = array1.concat(array2)
  var NuevoArreglo = []
  var Temp = 0;
  
  ArraysOrdenados = ArraysOrdenados.sort();
  
  console.log(ArraysOrdenados)

  do {
    
    Temp = ArraysOrdenados.shift()

    if (Temp === NuevoArreglo[NuevoArreglo.length-1]) {
      continue
    }
    else if (Temp !== ArraysOrdenados[0]) {
      continue
    }
    
    else  NuevoArreglo.push(Temp)
        
  } while(ArraysOrdenados.length > 0)
  
  console.log(NuevoArreglo[NuevoArreglo.length-1])
  console.log(ArraysOrdenados)
  console.log('Nuevo Arreglo: ',NuevoArreglo)
  return NuevoArreglo

}
buscoInterseccion([4,2,3,5,9,3,6,4,7,1,5],[1,3,4,5,8,2,4,3,3,8])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
