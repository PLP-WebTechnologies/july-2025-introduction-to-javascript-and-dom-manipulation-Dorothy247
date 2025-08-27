let contestants = [];

function registerContestant() {
  let name = document.getElementById("nameInput").value;
  let age = parseInt(document.getElementById("ageInput").value);
  let result = document.getElementById("registrationResult");

  if (!name || !age) {
    result.textContent = "Please enter both name and age.";
    return;
  }

  if (age >= 18 && age <= 28) {
    contestants.push({ name: name, age: age }); 
    result.textContent = ` ${name} has been registered successfully!`;
  } else {
    result.textContent = "Age must be between 18 and 28 to enter.";
  }
}
function introduceContestant(contestant) {
  return `✨ ${contestant.name}, aged ${contestant.age}, is ready for the stage!`;
}
function showContestants() {
  let list = document.getElementById("contestantList");
  list.innerHTML = "";

  if (contestants.length === 0) {
    list.innerHTML = "<li>No contestants registered yet.</li>";
    return;
  }

  for (let i = 0; i < contestants.length; i++) {
    let li = document.createElement("li");
    li.textContent = introduceContestant(contestants[i]);
    list.appendChild(li);
  }

  let countdown = 3;
  while (countdown > 0) {
    console.log("Show starts in... " + countdown);
    countdown--;
  }
}

document.getElementById("cheerBtn").addEventListener("click", function() {
  let cheerText = document.getElementById("cheerText");
  cheerText.classList.toggle("highlight");
  cheerText.textContent = cheerText.classList.contains("highlight")
    ? "Audience is cheering for the contestants!"
    : "Waiting for applause...";
});
