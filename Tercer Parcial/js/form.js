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
    let answer = [];   
    if (validate(x, "Dato x invalido") && validate(n, "Dato n invalido") && validate(p, "Dato p invalido") && validate(q, "p debe estar entre 0 y 1") && validate(n - x, "x debe ser menor o igual a n")) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            let bi = combinatorial(n,i) * Math.pow(p, i) * Math.pow(q, n - i);
            answer.push(bi);
            sum += bi;
        }
        //alert("valores (bi) de 0 hasta n " + answer );
        //alert("valor (bi) en x " + answer[x]);
        swal({
            icon: "success",
            title: answer[x]
        })
        //alert("suma de todas las (bi)  " + sum);
        
        // pruebas con mychart
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: answer,
                datasets: [{
                    label: 'Probability',
                    data: answer,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
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