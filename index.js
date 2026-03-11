let male = document.getElementById("male");
let female = document.getElementById("female");
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let form = document.getElementById("form");

document.getElementById("submit").addEventListener("click", validateForm);
document.getElementById("clear").addEventListener("click", resetForm);

function validateForm() {
    let temp = checkValidations();
    if (temp) {
        alert(temp);
    }
    else {
        countBmi();
    }
}

function checkValidations() {
    let temp = false;
    if (age.value === '' || height.value === '' || weight.value === '' || (!male.checked && !female.checked)) {
        temp = 'Please fill all fields';
    }
    else if (age.value <= 0 || height.value <= 0 || weight.value <= 0) {
        temp = 'Values cannot be zero or negative';
    }
    else if (age.value < 18) {
        temp = 'You must be 18 or older';
    }
    return temp;
}

function clearResults() {
    document.getElementById('bmitext').innerHTML = "";
    document.getElementById('gaugefill').style.width = "0%";
}

function resetForm() {
    form.reset();
    clearResults();
}

function countBmi() {
    clearResults();
    let bmi = weight.value / ((height.value / 100) * (height.value / 100));
    let result = '';
    let color = "#ffffff";
    let percent = Math.min((bmi / 40) * 100, 100);

    if (bmi < 18.5) {
        result = "Underweight";
        color = "#3498db";
    }
    else if (bmi <= 24.9) {
        result = "Healthy";
        color = "#2ecc71";
    }
    else if (bmi <= 29.9) {
        result = "Overweight";
        color = "#f1c40f";
    }
    else if (bmi <= 34.9) {
        result = "Obese";
        color = "#e67e22";
    }
    else {
        result = "Extremely Obese";
        color = "#e74c3c";
    }

    document.getElementById("gaugefill").style.width = percent + "%";
    document.getElementById("gaugefill").style.background = color;
    document.getElementById("bmitext").innerHTML = "<h6>BMI: <b>" + bmi.toFixed(2) + "</h6></b> — " + result;
}
