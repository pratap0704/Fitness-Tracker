const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.querySelector('#age').value);
    const gender = document.querySelector('#gender').value;
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const activityLevel = document.querySelector('#activity-level').value;
    const result = document.querySelector('#result');

    if ((age === '') || (age < 0) || (isNaN(age))) {
        result.innerHTML = "Please provide a valid age";
    } else if (gender === '') {
        result.innerHTML = "Please select a gender";
    } else if ((weight === '') || (weight < 0) || (isNaN(weight))) {
        result.innerHTML = "Please provide a valid weight";
    } else if ((height === '') || (height < 0) || (isNaN(height))) {
        result.innerHTML = "Please provide a valid height";
    } else if (activityLevel === '') {
        result.innerHTML = "Please select an activity level";
    } else {
        let dailyCalorieIntake;

        if (gender === 'male') {
            dailyCalorieIntake = 66 + (6.2 * weight) + (12.7 * height) - (6.8 * age);
        } else {
            dailyCalorieIntake = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        }

        switch (activityLevel) {
            case 'sedentary':
                dailyCalorieIntake *= 1.2;
                break;
            case 'lightly-active':
                dailyCalorieIntake *= 1.375;
                break;
            case 'moderately-active':
dailyCalorieIntake *= 1.55;
                break;
            case 'very-active':
                dailyCalorieIntake *= 1.725;
                break;
            default:
                dailyCalorieIntake *= 1.2;
        }

        result.innerHTML = `Your daily calorie intake is: ${dailyCalorieIntake.toFixed(2)} calories`;
    }
});