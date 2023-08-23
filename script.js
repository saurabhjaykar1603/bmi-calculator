const inputHeigtBox1 = document.getElementById("height");
const inputWeightBox2 = document.getElementById("weight");
const bmiText = document.getElementById("answer");

function calculateBmi() {
    const height = inputHeigtBox1.value;
    const weight = inputWeightBox2.value;
    const hm = height / 100;

    const bmi = (weight / (hm * hm)).toFixed(2);
    bmiText.innerHTML = ` ${bmi}`;
    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal");
    }

    else if (bmi >= 25 && bmi <= 29.9) {
        console.log("Overweight");
    }

    else if (bmi >= 30 ) {
        console.log("Obese");


    }

}