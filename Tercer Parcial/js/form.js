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
    let defectiveComputers = document.getElementById("defectiveComputers").value;
    let chosenComputers = document.getElementById("chosenComputers").value;
    let chosenProbability = document.getElementById("chosenProbability").value;    
    if (validate(totalComputers, "total de computadoras") && validate(defectiveComputers, "computadoras defectuosas") && validate(chosenComputers, "computadoras escogidas") && validate(chosenProbability, "probabilidad elegida") ) {
        if (defectiveComputers <= totalComputers && chosenComputers <= totalComputers && chosenProbability <= defectiveComputers) {
            let probability = combinatorial(defectiveComputers,chosenProbability) * combinatorial(totalComputers-defectiveComputers,chosenComputers-chosenProbability);
            probability = probability / combinatorial(totalComputers,chosenComputers);
            probability.toString();
            if (probability === 0) {
                swal({
                    icon: "success",
                    title: "0"
                }) 
            }
            else {
                swal({
                    icon: "success",
                    title: probability
                }) 
            }
        }
        else {
            swal({
                icon: "error",
                title: "Las computadoras escogidas/defectuosas deben ser menores o iguales a las totales, la probabilidad escogida debe ser menor o igual a las defectuosas "
            }) 
        }
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

