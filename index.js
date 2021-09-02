let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");

function validateForm() {
    if (age.value === '' || height.value === '' || weight.value === '' || (male.checked === false && female.checked === false)) {
        alert("Please fill in all of the fields!");
        document.getElementById("submit").removeEventListener("click", countBmi);
    }
    else {
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

function countBmi() {
    let a = [age.value, height.value, weight.value];
    if (male.checked) {
        a.push("male");
    }
    else if (female.checked) {
        a.push("female");
    }

    form.reset();
    let bmi = Number(a[2]) / (Number(a[1]) / 100 * Number(a[1]) / 100);

    let result = '';

    if (bmi < 18.5) {
        result = 'Underweight';
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Healthy';
    }
    else if (25 <= bmi && bmi <= 29.9) {
        result = 'Overweight';
    }
    else if (30 <= bmi && bmi <= 34.9) {
        result = 'Obese';
    }
    else if (35 <= bmi) {
        result = 'Extremely obese';
    }

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    let b = document.createTextNode(result);
    let c = document.createTextNode('BMI: ');
    let d = document.createTextNode(parseFloat(bmi.toString()).toFixed(2));

    h1.appendChild(b);
    h2.appendChild(c);
    h2.appendChild(d);

    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);


