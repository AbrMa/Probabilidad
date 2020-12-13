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
    let totalComputers = document.getElementById("totalComputers").value;
    let defectiveComputes = document.getElementById("defectiveComputers").value;
    let chosenComputers = document.getElementById("chosenComputers").value;
    /*
    if (validate(totalComputers, "Total computadoras") === true && validate(defectiveComputes, "Computadoras defectuosas") === true && validate(chosenComputers, "Computadoras escogidas") === true) {

    }
    */
   /*
   let con1 = validate(totalComputers, "Total computadoras");
   let con2 = validate(defectiveComputes, "Computadoras defectuosas");
   */
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