document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const activityLevel = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;
  
    const micronutrientRecommendations = getMicronutrientRecommendations(activityLevel, goal);
  
    document.getElementById('vitamin-d').textContent = micronutrientRecommendations.vitaminD;
    document.getElementById('calcium').textContent = micronutrientRecommendations.calcium;
    document.getElementById('iron').textContent = micronutrientRecommendations.iron;
  });
  
  function getMicronutrientRecommendations(activityLevel, goal) {
    const baseRecommendations = {
      vitaminD: 600,
      calcium: 1200,
      iron: 8,
    };
  
    const activeModifier = 1.5;
    const weightLossModifier = 1.2;
    const maintenanceModifier = 1;
    const muscleGainModifier = 1.5;
  
    const recommendations = {
      vitaminD: baseRecommendations.vitaminD,
      calcium: baseRecommendations.calcium,
      iron: baseRecommendations.iron,
    };
  
    switch (activityLevel) {
      case 'extremely_active':
        recommendations.vitaminD *= activeModifier;
        recommendations.calcium *= activeModifier;
        recommendations.iron *= activeModifier;
        break;
      case 'very_active':
        recommendations.vitaminD *= activeModifier;
        recommendations.calcium *= activeModifier;
        recommendations.iron *= activeModifier;
        break;
      case 'moderately_active':
        recommendations.vitaminD *= activeModifier;
        recommendations.calcium *= activeModifier;
        recommendations.iron *= activeModifier;
        break;
      case 'lightly_active':
        recommendations.vitaminD *= activeModifier;
        recommendations.calcium *= activeModifier;
        recommendations.iron *= activeModifier;
        break;
      case 'sedentary':
        recommendations.vitaminD *= activeModifier;
        recommendations.calcium *= activeModifier;
        recommendations.iron *= activeModifier;
        break;
    }
  
    switch (goal) {
      case 'weight_loss':
        recommendations.vitaminD *= weightLossModifier;
        recommendations.calcium *= weightLossModifier;
        recommendations.iron *= weightLossModifier;
        break;
      case 'maintenance':
        recommendations.vitaminD *= maintenanceModifier;
        recommendations.calcium *= maintenanceModifier;
        recommendations.iron *= maintenanceModifier;
        break;
      case 'muscle_gain':
        recommendations.vitaminD *= muscleGainModifier;
        recommendations.calcium *= muscleGainModifier;
        recommendations.iron *= muscleGainModifier;
        break;
    }
  
    return recommendations;
  }