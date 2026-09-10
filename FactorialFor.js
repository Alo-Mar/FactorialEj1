function factorial(n) {
  let resultado = 1;
  
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

// Ejemplo de uso
console.log(factorial(5)); // 120

function factorial(n) {
    let f = 1;
    let i = 1;
    
    while (i <= n) {
        f = f * i;
        i++;
    }
    
    return f;
}

// Ejemplo de uso
console.log(factorial(5)); // 120