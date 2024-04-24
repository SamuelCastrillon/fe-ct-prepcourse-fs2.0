function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  var Num = numero

  while(Num > 2){
    
    Num /= 2

  }

  return Num === 2;

}

module.exports = esPotenciaDeDos;
