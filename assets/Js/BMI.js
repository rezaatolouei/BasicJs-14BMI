var vazn = document.getElementById("weight");
var ghad = document.getElementById("height");

function BMI(){

    var vazn = weight.value;
    var ghad = height.value;

    var mohasebe = (vazn) / (ghad * ghad) * (1000);

    alert(mohasebe)
}