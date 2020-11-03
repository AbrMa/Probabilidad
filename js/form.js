function generateBoxes() {


    let totalfeilds = document.getElementById("colorNumber").value;

    if (isNaN(totalfeilds) || totalfeilds <= 0) {
        swal({
            icon: "error",
            title: "Dato num. de colores invalido"
        })
    }
    else {
        swal({
            icon: "info",
            title: "El num de colores generado es " + totalfeilds
        })
        let marbleColors = "";
        let marbleColorsSelect = '<select class="form-control selectButtonColor" id="selectedColor"> <option id = "SC">Seleccione Color</option>';
        let i;
        for (i = 1; i <= totalfeilds; i++) {
            marbleColors += '<div class="form-label-group"> <input type="text" id="num' + i + '" class="form-control" placeholder="N&uacute;mero de canicas del color ' + i + '" required autofocus><label for="num' + i + '">N&uacute;mero de canicas de color ' + i + '</label></div>'
            marbleColorsSelect += '<option id = "color'+ i +'">' + i + '</option>';
        }
        marbleColors += '<hr> <div class="form-label-group"> <input type="text" id="extractedMarbles" class="form-control" placeholder="N&uacute;mero de colorNumber" required autofocus><label for="extractedMarbles">N&uacute;mero de canicas a extraer</label></div>';
        marbleColorsSelect += '</select> ';
        document.getElementById("colors").innerHTML = marbleColors;
        document.getElementById("selectColors").innerHTML = marbleColorsSelect;
    }
}

function calculate() {
    let MAX = document.getElementById("colorNumber").value;
    let i;
    let probability = 1;
    let totalMarbles = 0;
    let selectedMarblesColor = document.getElementById("selectedColor").value;
    let numberSelectedMarblesColor = document.getElementById("num"+selectedMarblesColor).value;
    let extracredMarbles = document.getElementById("extractedMarbles").value;
    for (i = 1; i <= MAX; i++) {
        let numid = "num" + i.toString();
        totalMarbles += parseInt(document.getElementById(numid).value);
    }
    swal({
        icon: "info",
        title: extracredMarbles
    })

}

function combinatorial(n, k) {
    return (factorial(n))/(factorial(k)*factorial(n-k));
}

function factorial(n) {
    let fac = 1;
    let x;
    for (x = n; x !== 1; x--) {
        fac *= x;
    }
    return fac;
}