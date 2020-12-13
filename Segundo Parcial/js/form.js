function validate(n) {
    if (isNaN(n) || n < 0) {
        swal({
            icon: "error",
            title: "Datos invalidos"
        })
        return false;
    }
    return true;
}

function validateMarbels(n, total) {
    if (n <= total) {
        return true;
    }
    else {
        swal({
            icon: "error",
            title: "El num de canicas tomadas no puede ser mayor a la suma de las canicas"
        })
        return false;
    }
}

function calculate() {
    
}

function combinatorial(n, k) {
    if (n == 0) {
        return 0;
    }
    return (factorial(n)) / (factorial(k) * factorial(n - k));
}

function factorial(n) {

    let fac = 1;
    let x;
    for (x = n; x > 1; x--) {
        fac *= x;
    }
    return fac;
}