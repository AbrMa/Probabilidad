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

function generateBoxes() {

    let totalfeilds = document.getElementById("colorNumber").value;
    if (validate(totalfeilds) === true) {
        swal({
            icon: "info",
            title: "El num. de casillas a generar es " + totalfeilds
        })
        let marbleColors = "";
        let marbleColorsSelect = '<select class="form-control selectButtonColor" id="selectedColor"> <option id = "SC">Seleccione Color</option>';
        let i;
        for (i = 1; i <= totalfeilds; i++) {
            marbleColors += '<div class="form-label-group"> <input type="text" id="num' + i + '" class="form-control" placeholder="N&uacute;mero de canicas del color ' + i + '" required autofocus><label for="num' + i + '">N&uacute;mero de canicas de color ' + i + '</label></div>'
            marbleColorsSelect += '<option id = "color' + i + '">' + i + '</option>';
        }
        marbleColors += '<hr> <div class="form-label-group"> <input type="text" id="extractedMarbles" class="form-control" placeholder="N&uacute;mero de colorNumber" required autofocus><label for="extractedMarbles">N&uacute;mero de canicas a extraer</label></div>';
        marbleColorsSelect += '</select> ';
        document.getElementById("colors").innerHTML = marbleColors;
        document.getElementById("selectColors").innerHTML = marbleColorsSelect;
    }
}

function calculate() {
    let MAX = document.getElementById("colorNumber").value;
    if (validate(MAX) === true) {
        let i;
        let probability = 1;
        let totalMarbles = 0;
        let extracredMarbles = document.getElementById("extractedMarbles").value;
        let selectedMarblesColor = document.getElementById("selectedColor").value;
        if (validate(selectedMarblesColor) === true && validate(selectedMarblesColor) === true && validate(extracredMarbles) === true) {
            let numberSelectedMarblesColor = document.getElementById("num" + selectedMarblesColor).value;
            let answerExists = true;
            for (i = 1; i <= MAX; i++) {
                let numid = "num" + i.toString();
                let currentNumber = document.getElementById(numid).value;
                if (validate(currentNumber) === true) {
                    totalMarbles += currentNumber;
                }
                else {
                    answerExists = false;
                    break;
                }
            }
            if (answerExists === true) {
                //probability -= (combinatorial(numberSelectedMarblesColor, 0) * combinatorial(totalMarbles - extracredMarbles, extracredMarbles)) / combinatorial(totalMarbles, extracredMarbles);
                swal({
                    icon: "success",
                    title: "La probabilidad es de  " + probability
                })
            }
        }
    }
}

function combinatorial(n, k) {
    if(n == 0)
        return 0;
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
