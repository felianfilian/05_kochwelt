let ppAmount2 = [1, 1, 500, 0, 200, 70, 1, 400, 2, 500];

let ingredients2Container = [
  " Zwiebel(n)",
  " Möhre",
  " Rinderhackfleisch oder Tartar",
  " Salz und Pfeffer",
  "ml Gemüsebrühe (Instant)",
  "g Tomatenmark",
  "TL Oregano",
  " g Tomaten, stückige, mit Kräutern",
  " EL Tomatenketchup",
  " g Spaghetti",
];

let ingredients2ContainerContainer = document.getElementById(
  "ingredients2Container"
);

let defaultPersonCount = 4;
let personCount = document.getElementById("person-count");

function init() {
  personCount.value = 4;
  showIngredients2ingredients2Container(defaultPersonCount);
}

function changePersons() {
  if (personCount.value < 1 || personCount.value > 100) {
    ingredients2ContainerContainer.innerHTML = `<h3 style="color:red">Bitte eine Perosnenanzahl zwischen 1 und 100 angeben</h3>`;
  } else {
    showIngredients2ingredients2Container(personCount.value);
  }
}

function showIngredients2ingredients2Container(personMultiplier) {
  ingredients2ContainerContainer.innerHTML = "";
  let actualAmount;
  for (let i = 0; i < ingredients2Container.length; i++) {
    if (ppAmount2[i] == 0) {
      actualAmount = "";
    } else {
      actualAmount = ppAmount2[i] * personMultiplier;
    }
    ingredients2ContainerContainer.innerHTML += `<li>${actualAmount} ${ingredients2Container[i]}</li>`;
  }
}
