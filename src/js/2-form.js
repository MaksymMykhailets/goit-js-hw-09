const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
emailInput.value = savedFormData.email ?? "";
messageInput.value = savedFormData.message ?? "";

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  if (event.target === emailInput || event.target === messageInput) {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
}

function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  form.reset();
  localStorage.removeItem(localStorageKey);
  
  if (formData.email !== "" && formData.message !== "") {
    console.log(formData);
  }
}
