// Hover effect to increase font size for price
const prices = document.querySelectorAll(".card-price");
prices.forEach((price) => {
  price.addEventListener("mouseenter", () => {
    price.style.fontSize = "1.5em"; // Increase font size
  });
  price.addEventListener("mouseleave", () => {
    price.style.fontSize = ""; // Reset font size
  });
});

// Change the image on "Buy Now" button click
const buyButtons = document.querySelectorAll(".btn");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card-body");
    const image = card.previousElementSibling; // Find the associated image
    if (image) {
      image.src =
        "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";
      image.alt = "Updated Image";
    }
  });
});

const form = document.querySelector(".contact-form");
const inputs = form.querySelectorAll("input, textarea");
const submissionMessage = document.getElementById("submissionMessage");

// Apply validation and handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  let isValid = true;

  // Validate all inputs
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.border = "2px solid red"; // Highlight invalid fields
    } else {
      input.style.border = ""; // Reset valid fields
    }
  });

  if (isValid) {
    // Display submission message
    submissionMessage.style.display = "block";
  }
});

// Change text to uppercase and text color on input change
inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    event.target.value = event.target.value.toUpperCase(); // Convert text to uppercase
    event.target.style.color = "#007BFF"; // Change text color
  });
});
