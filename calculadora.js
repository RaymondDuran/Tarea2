class Calculadora {
    
    sumar(num1, num2) {
        let x = num1 + num2;
        localStorage.setItem(x,JSON.stringify(x));
        display.actualizar();
        return num1 + num2;
    }

    restar(num1, num2) {
        let x = num1 - num2;
        localStorage.setItem(x,JSON.stringify(x));
        display.actualizar();
        return num1 - num2;
    }

    dividir(num1, num2) {
        let x = num1 / num2;
        localStorage.setItem(x,JSON.stringify(x));
        display.actualizar();
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        let x = num1 * num2;
        localStorage.setItem(x,JSON.stringify(x));
        display.actualizar();
        return num1 * num2;
    }
    
} 