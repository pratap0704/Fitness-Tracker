const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    const message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        results.innerHTML = "Please provide a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        const bmi = (weight / (height * height)) * 10000;
        let bmiCategory;

        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi < 25) {
            bmiCategory = "Normal weight";
        } else if (bmi < 30) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }

        results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
        message.innerHTML = `You are ${bmiCategory}.`;
    }
});