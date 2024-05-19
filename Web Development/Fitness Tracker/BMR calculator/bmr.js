function calculateBMR() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var sex = document.getElementById("sex").value;
    var bmr;

    if (sex == "female") {
        bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    } else {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    }

    document.getElementById("result").innerHTML = "Your BMR is: " + bmr.toFixed(2);
}