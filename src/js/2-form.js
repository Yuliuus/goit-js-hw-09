const feedbackForm = document.querySelector(".feedback-form");
const feedbackFormEmail = feedbackForm.elements.email;
const feedbackFormMessage = feedbackForm.elements.message;
const errorMessage = document.querySelector(".error-message");

const localStorageKey = 'feedback-form-state';
const formDataIsSaved = localStorage.getItem(localStorageKey);

const formData = {
  email: "",
  message: ""
};

if (formDataIsSaved) {
  const returnFormData = JSON.parse(formDataIsSaved);
  feedbackFormEmail.value = returnFormData.email;
  feedbackFormMessage.value = returnFormData.message;
  formData.email = returnFormData.email;
  formData.message = returnFormData.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (feedbackFormEmail.value.trim() && feedbackFormMessage.value.trim()) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
    errorMessage.style.display = 'none'; 
  } else {
    errorMessage.style.display = 'block'; 
    errorMessage.textContent = 'Please fill all fields';
  }
});

feedbackForm.addEventListener('input', () => {
  formData.email = feedbackFormEmail.value.trim();
  formData.message = feedbackFormMessage.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

