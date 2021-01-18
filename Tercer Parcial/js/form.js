function validate(n, dato) {
    if (isNaN(n) || n < 0) {
        swal({
            icon: "error",
            title: "Dato " + dato + " invalido"
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
    if (validate(x, "x") && validate(n, "n") && validate(p, "p") && validate(q, "q") ) {
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