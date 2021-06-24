var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)){
        alert("Please fill in all of the fields!");
        document.getElementById("submit").removeEventListener("click", countBmi);
    }
    else {
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
    var a = [age.value, height.value, weight.value];
    if (male.checked){
        a.push("male");
    }
    else if (female.checked){
        a.push("female");
    }

form.reset();
var bmi = Number(a[2])/(Number(a[1])/100*Number(a[1])/100);

var result = '';

if (bmi < 18.5){
    result = 'Underweight';
}
else if (18.5 <= bmi && bmi <= 24.9){
    result = 'Healthy';
}
else if (25 <= bmi && bmi <= 29.9){
    result = 'Overweight';
}
else if (30 <= bmi && bmi <= 34.9){
    result = 'Obese';
}
else if (35 <= bmi){
    result = 'Extremely obese';
}

var h1 = document.createElement("h1");
var h2 = document.createElement("h2");

var b = document.createTextNode(result);
var c = document.createTextNode('BMI: ');
var d = document.createTextNode(parseFloat(bmi).toFixed(2));

h1.appendChild(b);
h2.appendChild(c);
h2.appendChild(d);

document.body.appendChild(h1);
document.body.appendChild(h2);
document.getElementById("submit").removeEventListener("click", countBmi);
document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);
