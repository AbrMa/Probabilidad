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

function generateBoxes()
{
    let totalfeilds = document.getElementById("numberAirstrip").value;
    if (validate(totalfeilds) === true) {
        if (totalfeilds > 0) {
            swal({
                icon: "info",
                title: "El num. de casillas a generar es " + totalfeilds
            })
            let probabilidadPista = "";
            let avionesPista = "";
            let i;
            for (i = 1; i <= totalfeilds; i++) {
                probabilidadPista += '<div class="form-label-group"> <input type="text" id="num' + i + '" class="form-control" placeholder="Probabilidad de la pista ' + i + '" required autofocus><label for="num' + i + '">Probabilidad de la pista ' + i + '</label></div>';
                avionesPista += '<div class="form-label-group"> <input type="text" id="num' + i + '" class="form-control" placeholder="Aviones en la pista ' + i + '" required autofocus><label for="num' + i + '">Aviones en la pista ' + i + '</label></div>';
            }
            document.getElementById("probabilidades").innerHTML = probabilidadPista;
            document.getElementById("avionesPista").innerHTML = avionesPista;
        }
        else {
            swal({
                icon: "error",
                title: "El num. de casillas debe ser mayor  a 0"
            })
        }
    }
}

function getValues()
{

    calculate(x,p);
}

function calculate(x,p) {
    let denominador = 1;
    let probabilidad = 1;
    let n = parseInt(document.getElementById("n").value);
    let pistas = parseInt(document.getElementById("pistas").value,10);
    for(var i=0;i<pistas;i++)
    {
        denominador*=factorial(x[i]);
        probabilidad*=Math.pow(p[i],x[i]);
    }
    n = n / denominador;
    probabilidad = probabilidad * n;
    swal(
        {
            icon: "succes",
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