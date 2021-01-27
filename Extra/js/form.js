function generateBoxes()
{
    let totalfeilds = document.getElementById("numberAirstrip").value;
    let n = parseInt(document.getElementById("totalPlanes").value);
    if (n >= 0 && !isNaN(n)) { 
        if (totalfeilds > 0 && !isNaN(totalfeilds)) {
            swal({
                icon: "info",
                title: "El num. de casillas a generar es " + totalfeilds
            })
            let probabilidadPista = "";
            let avionesPista = "";
            let i;
            for (i = 1; i <= totalfeilds; i++) {
                probabilidadPista += '<div class="form-label-group"> <input type="text" id="airstrip' + i + '" class="form-control" placeholder="Probabilidad de la pista ' + i + '" required autofocus><label for="airstrip' + i + '">Probabilidad de la pista ' + i + '</label></div>';
                avionesPista += '<div class="form-label-group"> <input type="text" id="plane' + i + '" class="form-control" placeholder="Aviones en la pista ' + i + '" required autofocus><label for="plane' + i + '">Aviones en la pista ' + i + '</label></div>';
            }
            document.getElementById("probabilidades").innerHTML = probabilidadPista;
            document.getElementById("avionesPista").innerHTML = avionesPista;
        }
        else {
            swal({
                icon: "error",
                title: "El num. de pistas debe ser mayor a 0"
            })
        }
    }
    else {
        swal({
            icon: "error",
            title: "El num. de aviones debe ser mayor o igual a 0"
        })
    }
}

function getValues()
{
    let x = [];
    let p = [];
    let pistas = parseInt(document.getElementById("numberAirstrip").value);
    let totalPlanes = parseInt(document.getElementById("totalPlanes").value);
    let sumPlanes = 0;
    for (var i = 1; i <= pistas; i++) {
        let airstripID = "airstrip" + i.toString();
        let planeID = "plane" + i.toString();
        let currentPlane = eval(document.getElementById(planeID).value);
        let currentAirstrip = eval(document.getElementById(airstripID).value);
        console.log(i+" "+currentPlane,currentAirstrip);
        if (0 <= currentAirstrip && currentAirstrip <= 1) {
            if (currentPlane >= 0) {
                x.push(currentPlane);
                p.push(currentAirstrip);
                sumPlanes += currentPlane;
            }
            else {
                swal({
                    icon: "error",
                    title: "Los aviones en la pista " + i + " deben ser un num. mayor a 0"
                })
            }
        }
        else {
            swal({
                icon: "error",
                title: "La probabilidad de la pista " + i + " debe ser un num. entre 0 y 1"
            })
        }
    }
    if (sumPlanes === totalPlanes) {
        calculate(x,p);
    }
    else {
        swal({
            icon: "error",
            title: "La suma de los aviones no es igual a " + totalPlanes
        })
    }
}

function calculate(x,p) {
    let denominador = 1;
    let probabilidad = 1;
    let n = parseInt(document.getElementById("totalPlanes").value);
    let pistas = parseInt(document.getElementById("numberAirstrip").value);
    n = factorial(n);
    for(var i=0;i<pistas;i++)
    {
        denominador*=factorial(x[i]);
        console.log(Math.pow(p[i],x[i]));
        probabilidad*=Math.pow(p[i],x[i]);
    }
    console.log(denominador);
    console.log(probabilidad);
    n = n / denominador;
    probabilidad = probabilidad * n;
    swal(
        {
            icon: "success",
            text:"La probabilidad es : "+ probabilidad
    });
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