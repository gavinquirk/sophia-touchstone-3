// Form Validaation

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Name Validation
  const nameInput = document.getElementById("name");

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email Validation
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});

// Specials - Interactive Feature

// Data
const bakerySpecials = [
  {
    name: "Sourdough Boule",
    description: "Freshly baked artisan sourdough with a crispy crust.",
    price: "$6.50",
  },
  {
    name: "Cinnamon Roll",
    description: "Warm, sweet roll topped with cream cheese frosting.",
    price: "$4.00",
  },
  {
    name: "Blueberry Scone",
    description: "Flaky, buttery scone packed with fresh blueberries.",
    price: "$3.75",
  },
];

// Display random special
function displayRandomSpecial() {
  // Pick a random item from the specials array
  const randomIndex = Math.floor(Math.random() * bakerySpecials.length);
  const selectedSpecial = bakerySpecials[randomIndex];

  // Update the page with the selected special
  const displayArea = document.getElementById("specialDisplay");
  displayArea.innerHTML = `<strong>${selectedSpecial.name}</strong>: ${selectedSpecial.description} (${selectedSpecial.price})`;
}

// Attach event listener to the button
const specialButton = document.getElementById("specialButton");
if (specialButton) {
  specialButton.addEventListener("click", displayRandomSpecial);
}
