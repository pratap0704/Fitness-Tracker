const metValues = {
    running: 8.0,
    swimming: 7.0,
    walking: 3.5,
    stepping: 4.0,
    skipping: 8.0,
    gymming: 6.0,
    sports: 5.0,
};

function calculateCalories() {
    const activity = document.getElementById("activity").value;
    const duration = document.getElementById("duration").value;
    const weight = document.getElementById("weight").value;
    const weightUnit = document.getElementById("weight-unit").value;

    const errors = [];

    if (duration < 1) {
        errors.push("Duration should be at least 1 minute.");
    }

    if (weight < 1) {
        errors.push("Weight should be at least 1 kg or 1 lbs.");
    }

    if (errors.length > 0) {
        document.getElementById("result").textContent = errors.join("\n");
        return;
    }

    const met = metValues[activity];
    const caloriesBurned = met * weight * duration / 60;

    if (weightUnit === "lbs") {
        caloriesBurned *= 0.453592;
    }

    document.getElementById("result").textContent = `Calories burned: ${Math.round(caloriesBurned)}`;
}