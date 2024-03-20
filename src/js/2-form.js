const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const emailLocalStorageKey = "feedback-form-email";
const messageLocalStorageKey = "feedback-form-message";

emailInput.value = localStorage.getItem(emailLocalStorageKey) ?? "";
messageInput.value = localStorage.getItem(messageLocalStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  if (evt.target === emailInput) {
    localStorage.setItem(emailLocalStorageKey, emailInput.value);
  } else if (evt.target === messageInput) {
    localStorage.setItem(messageLocalStorageKey, messageInput.value);
  }
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  form.reset();
  localStorage.removeItem(emailLocalStorageKey);
  localStorage.removeItem(messageLocalStorageKey);
});

console.log("Email:", emailInput.value);
console.log("Message:", messageInput.value);
