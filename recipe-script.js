let = [
  {
    "recipeName": "Griechischer Bauernsalat",
    "ingredients": [
      " Salatgurke",
      " Paprikaschoten (rot und grün)",
      "g Tomaten",
      " Zwiebeln",
      "g Schafskäse",
      "g Oliven aus dem Glas",
      "Salz und Pfeffer",
      " Zitrone",
      "ml Olivenöl",
      "Oregano",
    ],
    "ppAmount": [0.25, 0.5, 125, 0.5, 50, 25, 0, 0.25, 25, 0]
  }
]

// let ppAmount = [0.25, 0.5, 125, 0.5, 50, 25, 0, 0.25, 25, 0];

// let ingredients = [
//   " Salatgurke",
//   " Paprikaschoten (rot und grün)",
//   "g Tomaten",
//   " Zwiebeln",
//   "g Schafskäse",
//   "g Oliven aus dem Glas",
//   "Salz und Pfeffer",
//   " Zitrone",
//   "ml Olivenöl",
//   "Oregano",
// ];

let ingredientsContainer = document.getElementById("ingredients");

let defaultPersonCount = 4;
let personCount = document.getElementById("person-count");

function init() {
  personCount.value = 4;
  showIngredients(defaultPersonCount);
}

function changePersons() {
  if (personCount.value < 1 || personCount.value > 100) {
    ingredientsContainer.innerHTML = `<h3 style="color:red">Bitte eine Personenanzahl zwischen 1 und 100 angeben</h3>`;
  } else {
    showIngredients(personCount.value);
  }
}

function showIngredients(personMultiplier) {
  ingredientsContainer.innerHTML = "";
  let actualAmount;
  for (let i = 0; i < ingredients.length; i++) {
    if (ppAmount[i] == 0) {
      actualAmount = "";
    } else {
      actualAmount = ppAmount[i] * personMultiplier;
    }
    ingredientsContainer.innerHTML += `<li>${actualAmount} ${ingredients[i]}</li>`;
  }
}
