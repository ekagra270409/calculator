function add() {
    var calculation_1 =
        Number(document.getElementById("numeral_1").value) +
        Number(document.getElementById("numeral_2").value);
    window.alert(calculation_1);
}

function subtract() {
    var calculation_2 =
        Number(document.getElementById("numeral_1").value) -
        Number(document.getElementById("numeral_2").value);
    window.alert(calculation_2);
}

function multiply() {
    var calculation_3 =
        Number(document.getElementById("numeral_1").value) *
        Number(document.getElementById("numeral_2").value);
    window.alert(calculation_3);
}

function divide() {
    var calculation_4 =
        Number(document.getElementById("numeral_1").value) /
        Number(document.getElementById("numeral_2").value);
    window.alert(calculation_4);
}