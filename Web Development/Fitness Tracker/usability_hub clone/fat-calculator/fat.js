const form = document.getElementById('bodyFatForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;
    const waist = parseFloat(document.getElementById('waist').value);
    const waistUnit = document.getElementById('waistUnit').value;

    let bodyFatPercentage = 0;

    if (gender === 'male') {
        if (heightUnit === 'cm') {
            const heightInMeters = height / 100;
            bodyFatPercentage = 1.2 * (weight / Math.pow(heightInMeters, 2)) + 0.23 * (10 - age) - 5.4;
        } else {
            const heightInInches = height * 0.0254;
            bodyFatPercentage = 1.2 * (weight * 0.453592 / Math.pow(heightInInches, 2)) + 0.23 * (10 - age) - 5.4;
        }
    } else {
        if (heightUnit === 'cm') {
            const heightInMeters = height / 100;
            bodyFatPercentage = 1.2 * (weight / Math.pow(heightInMeters, 2)) + 0.23 * (10 - age) - 16.2;
        } else {
            const heightInInches = height * 0.0254;
            bodyFatPercentage = 1.2 * (weight * 0.453592 / Math.pow(heightInInches, 2)) + 0.23 * (10 - age) - 16.2;
        }
    }

    if (waistUnit === 'cm') {
        bodyFatPercentage += 0.1 * (waist - 60);
    } else {
        bodyFatPercentage += 0.1 * (waist * 0.0254 - 60);
    }

    result.textContent = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
});