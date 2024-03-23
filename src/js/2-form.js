const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";

const info = JSON.parse(localStorage.getItem(localStorageKey)) || {};
emailInput.value = info.email ?? "";
messageInput.value = info.message ?? "";

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  const infoInput = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  if (event.target === emailInput || event.target === messageInput) {
    localStorage.setItem(localStorageKey, JSON.stringify(infoInput));
  }
  
  if (infoInput.email.trim() !== "" && infoInput.message.trim() !== "") {
    console.log("Email:", infoInput.email);
    console.log("Message:", infoInput.message);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const infoSubmit = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  form.reset();
  localStorage.removeItem(localStorageKey);
  
  console.log(infoSubmit);
}
