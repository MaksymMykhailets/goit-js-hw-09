const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const emailLocalStorageKey = "feedback-form-email";
const messageLocalStorageKey = "feedback-form-message";

emailInput.value = localStorage.getItem(emailLocalStorageKey) ?? "";
messageInput.value = localStorage.getItem(messageLocalStorageKey) ?? "";

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  if (event.target === emailInput) {
    localStorage.setItem(emailLocalStorageKey, emailInput.value);
  } else if (event.target === messageInput) {
    localStorage.setItem(messageLocalStorageKey, messageInput.value);
  }
  console.log("Email:", emailInput.value);
};

function handleSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(emailLocalStorageKey);
  localStorage.removeItem(messageLocalStorageKey);
  console.log("Message:", messageInput.value);
};
