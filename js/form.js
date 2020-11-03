function generateBoxes() {


    var totalfeilds = document.getElementById("colores").value;

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
        var htmlString = "";

        var i;

        for (i = 1; i <= totalfeilds; i++) {
            htmlString += '<div class="form-label-group"> <input type="text" id="num' + i + '" class="form-control" placeholder="N&uacute;mero de canicas de color ' + i + '" required autofocus><label for="num' + i + '">N&uacute;mero de canicas de color ' + i + '</label></div>'
        }

        document.getElementById("colors").innerHTML = htmlString;
    }
}
