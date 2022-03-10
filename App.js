// Date de aujourd'hui de base
let Date_input = document.querySelector('input[type ="date"]');
let Today_date = new Date();
let month = Today_date.getMonth();
let date = Today_date.getDate();
console.log(month);
month = month.toString().padStart(2, "0");
date = date.toString().padStart(2, "0");
console.log(month);
Date_input.value = Today_date.getFullYear() + "-" + date + "-" + month;

// Catégorie de priorité
let priorite = document.querySelector("#priority");
let ok_tiers = document.querySelector("#OkTiers");
let chill = document.querySelector("#chill");

// Creation priorité
let input_text = document.querySelector("#input_text");
let select_option = document.querySelector("#select_option");
let input_submit = document.querySelector("#input_submit");

let task_text = "";
let task_level = "";

input_submit.addEventListener("click", AddTask);

function AddTask() {
  task_text = input_text.value;
  task_level = select_option.value;

  // Check up pour vérifier s'il a bien tout remplit
  if (task_level === "" && task_text === "") {
    alert("gros con tu as pas tout remplis ");
  }

  // Création de la task   si priority
  if (task_level === "select_priority") {
    let task = document.createElement("li");
    priorite.appendChild(task);
    task.innerHTML = task_text;
  }
  // Création de la task   si ok_tiers
  if (task_level === "select_ok_tiers") {
    let task = document.createElement("li");
    ok_tiers.appendChild(task);
    task.innerHTML = task_text;
  }
  // Création de la task   si chill
  if (task_level === "select_chill") {
    let task = document.createElement("li");
    chill.appendChild(task);
    task.innerHTML = task_text;
  }
}
