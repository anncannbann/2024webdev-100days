// Select elements
const enterButton = document.getElementById("enterButton");
const passwordPrompt = document.getElementById("passwordPrompt");
const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const mainContent = document.getElementById("mainContent");

// Password to access the main page
const correctPassword = "yourpassword";

// Show password prompt on enter button click
enterButton.addEventListener("click", function () {
  passwordPrompt.classList.remove("hidden");
});

// Check password on submit button click
submitButton.addEventListener("click", function () {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    passwordPrompt.classList.add("hidden");
    mainContent.classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
    passwordInput.value = "";
  }
});
