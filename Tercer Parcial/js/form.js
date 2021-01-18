function validate(n, msj) {
    if (isNaN(n) || n < 0) {
        swal({
            icon: "error",
            title: msj
        })
        return false;
    }
    return true;
}


function calculate() {  
    let x = document.getElementById("x").value;
    let n = document.getElementById("n").value;
    let p = document.getElementById("p").value;
    let q = 1 - p;   
    if (validate(x, "Dato x invalido") && validate(n, "Dato n invalido") && validate(p, "Dato p invalido") && validate(q, "p debe estar entre 0 y 1") && validate(n - x, "x debe ser menor o igual a n")) {
        let bi = combinatorial(n,x) * Math.pow(p, x) * Math.pow(q, n - x);
        swal({
            icon: "success",
            title: bi
        })
    }
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