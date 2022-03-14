// Date de aujourd'hui de base
let Date_input = document.querySelector('input[type ="date"]');
let Today_date = new Date();
let month = Today_date.getMonth();
let date = Today_date.getDate();

month = month.toString().padStart(2, "0");
date = date.toString().padStart(2, "0");

Date_input.value = Today_date.getFullYear() + "-" + month + "-" + date;

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

//Local storage

let RecoverPriorite = null;
let prioriteStorage = [];
let prioriteAssembler = "";
let i = 0;
LoadStorage();
//check local storage
function LoadStorage() {
  if (localStorage) {
    if (localStorage.getItem("priorite")) {
      RecoverPriorite = localStorage.getItem("priorite");

      for (let a = 0; a < RecoverPriorite.length; a++) {
        if (RecoverPriorite[a] === "," || a + 1 === RecoverPriorite.length) {
          let recoverTask = document.createElement("li");
          priorite.appendChild(recoverTask);
          recoverTask.textContent = prioriteAssembler;

          prioriteAssembler = "";
        } else {
          prioriteAssembler += RecoverPriorite[a];
        }
      }
      //result
    }
  } else {
    return;
    console.log("ya r dans le stockage chef");
  }
}

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
    task.textContent = task_text;
    prioriteStorage[i] = task_text; // el problème esta aqui !
    i += 1;

    localStorage.setItem("priorite", prioriteStorage);
  }
  // Création de la task   si ok_tiers
  if (task_level === "select_ok_tiers") {
    let task = document.createElement("li");
    ok_tiers.appendChild(task);
    task.textContent = task_text;
  }
  // Création de la task   si chill
  if (task_level === "select_chill") {
    let task = document.createElement("li");
    chill.appendChild(task);
    task.textContent = task_text;
  }
}

// Locale Storage
