function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  
  var NumeroGrande = Math.max(a,b)
  var NumeroPeque = Math.min(a,b)
  var resultado = 1;

  for (var i = NumeroPeque; i <= NumeroGrande; i++){
        
    resultado *= i
       
    console.log(resultado)
  }

  if (resultado === -0) return 0;
  return resultado;

}
productoEntreNúmeros(1, 5)
module.exports = productoEntreNúmeros;