function calculadora (operacion, num1, num2) {
    switch (operacion){
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            if (num2 === "3"){
                return 'Error: multiplicacion por un string';
            }
            return num1 * num2;
        default:
            return 'opercion no valida';
        case "division":
            return num1 / num2;
    }
}
console.log(calculadora ("suma", 2, 7));
console.log(calculadora("resta", 12, 20 ));
console.log(calculadora("multiplicacion", 1, "3"));
console.log(calculadora("division", 20, 68))