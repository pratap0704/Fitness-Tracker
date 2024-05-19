// script.js

const nutritionalData = {
  rice: {
      name: "Rice",
      calories: 97
  },
  cucumber: {
      name: "Cucumber",
      calories: 15
  },
  potato: {
      name: "Potato",
      calories: 77
  },
  tomato: {
      name: "Tomato",
      calories: 19
  },

  roti: {
    name: "roti",
    calories: 85
},
daal: {
    name: "daal",
    calories: 107
},
alusabzi: {
    name: "alusabzi",
    calories: 96
},
paneer: {
    name: "Paneer",
    calories: 296
},
rajma: {
  name: "Rajma",
  calories: 333
},
mashroom: {
  name: "Mashroom",
  calories: 20
},
chole: {
  name: "Chole",
  calories: 180
},
matar: {
  name: "Matar",
  calories: 344
},
pizza: {
  name: "Pizza",
  calories: 379
},
pasta: {
  name: "Pasta",
  calories: 131
},
chai: {
  name: "Chai",
  calories: 100
},
milk: {
  name: "Milk",
  calories: 50
},
apple: {
  name: "Apple",
  calories: 51
},
banana: {
  name: "Banana",
  calories: 89
},
pineapple: {
  name: "Pine-Apple",
  calories: 48
},
mango: {
  name: "Mango",
  calories: 63
},
orange: {
  name: "Orange",
  calories: 47
},
egg: {
  name: "Egg",
  calories: 72
},
chicken: {
  name: "Chicken Tikka Mashala",
  calories: 180
},
meat: {
  name: "Meat",
  calories: 130
},
fish: {
  name: "fish",
  calories: 127
}
};

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsList = document.getElementById("results-list");

searchButton.addEventListener("click", searchHandler);

function searchHandler() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const foodItem = nutritionalData[searchTerm];

  if (foodItem) {
      displayResults([foodItem]);
  } else {
      resultsList.innerHTML = "<li>No nutritional information found for that food item.</li>";
  }
}

function displayResults(results) {
  resultsList.innerHTML = "";
  results.forEach(data => {
      const listItem = document.createElement("li");
      listItem.textContent = `${data.name} has ${data.calories} calories per serving (100 gram).`;
      resultsList.appendChild(listItem);
  });
}