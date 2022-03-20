// Date de aujourd'hui de base
let Date_input = document.querySelector('input[type="date"]');
let Today_date = new Date();
let month = Today_date.getMonth();
let date = Today_date.getDate();

month = month.toString().padStart(2, "0");
date = date.toString().padStart(2, "0");

Date_input.value = Today_date.getFullYear() + "-" + month + "-" + date;

// Catégorie de priorité
let priorite = document.querySelector("#priority");
let okTiers = document.querySelector("#OkTiers");
let chill = document.querySelector("#chill");

// Creation priorité
let input_text = document.querySelector("#input_text");
let select_option = document.querySelector("#select_option");
let input_submit = document.querySelector("#input_submit");

let task_text = "";
let task_level = "";

input_submit.addEventListener("click", AddTask);

//Local storage
//Priorite_Storage
let RecoverPriorite = [];
let prioriteStorage = [];
//OkTiers_storage
let RecoverOkTiers = [];
let okTierStorage = [];
//Chill Storage
let recoverChill = [];
let chillStorage = [];

//local storage check
if (localStorage) {
  if (localStorage.getItem("priorite")) {
    RecoverPriorite = localStorage.getItem("priorite").split(",");

    RecoverPriorite.forEach((task, index) => {
      // Analyse du tableau
      let RecoverTask = document.createElement("li");
      priorite.appendChild(RecoverTask);
      RecoverTask.textContent = task;

      RecoverTask.addEventListener("click", () => {
        RecoverTask.remove();
        prioriteStorage.splice(index, 1);
        localStorage.setItem("priorite", prioriteStorage);
      });
      prioriteStorage.push(task);
    });
  }
  if (localStorage.getItem("OkTiers")) {
    RecoverOkTiers = localStorage.getItem("OkTiers").split(",");

    RecoverOkTiers.forEach((task, index) => {
      let RecoverTask = document.createElement("li");
      okTiers.appendChild(RecoverTask);
      RecoverTask.textContent = task;

      RecoverTask.addEventListener("click", () => {
        RecoverTask.remove();
        okTierStorage.splice(index, 1);
        localStorage.setItem("OkTiers", okTierStorage);
      });

      okTierStorage.push(task);
    });
  }
  if (localStorage.getItem("chill")) {
    recoverChill = localStorage.getItem("chill").split(",");

    recoverChill.forEach((task, index) => {
      let recoverTask = document.createElement("li");
      chill.appendChild(recoverTask);
      recoverTask.textContent = task;

      recoverTask.addEventListener("click", () => {
        console.log(index);
        recoverTask.remove();
        chillStorage.splice(index, 1);
        localStorage.setItem("chill", chillStorage);
      });
      chillStorage.push(task);
    });
  }
} else {
  console.log("ya r dans le stockage chef");
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
    //local storage

    prioriteStorage.push(task_text);
    task.addEventListener("click", () => {
      task.remove();
      prioriteStorage.splice(prioriteStorage.length - 1, 1);
      localStorage.setItem("priorite", prioriteStorage);
    });
    localStorage.setItem("priorite", prioriteStorage);
  }

  // Création de la task   si ok_tiers
  if (task_level === "select_ok_tiers") {
    let task = document.createElement("li");
    okTiers.appendChild(task);
    task.textContent = task_text;
    okTierStorage.push(task_text);

    task.addEventListener("click", () => {
      task.remove();
      okTierStorage.splice(okTierStorage.length - 1, 1);
      localStorage.setItem("OkTiers", okTierStorage);
    });

    localStorage.setItem("OkTiers", okTierStorage);
  }
  // Création de la task   si chill
  if (task_level === "select_chill") {
    let task = document.createElement("li");
    chill.appendChild(task);
    task.textContent = task_text;
    chillStorage.push(task_text);

    task.addEventListener("click", () => {
      task.remove();
      chillStorage.splice(chillStorage.length - 1, 1);
      localStorage.setItem("chill", chillStorage);
    });
    localStorage.setItem("chill", chillStorage);
  }
}
