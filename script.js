function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight values.";
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display result
    var bmiResult = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        bmiResult += "You are underweight.";
    } else if (bmi < 25) {
        bmiResult += "You have a normal weight.";
    } else if (bmi < 30) {
        bmiResult += "You are overweight.";
    } else {
        bmiResult += "You are obese.";
    }

    document.getElementById('result').innerHTML = bmiResult;
}
