const feedbackForm = document.querySelector(".feedback-form");
const feedbackFormEmail = feedbackForm.elements.email;
const feedbackFormMessage = feedbackForm.elements.message;

const localStorageKey = 'feedback-form-state';
const formDataIsSaved = localStorage.getItem(localStorageKey);

const formData = {
    email: "", 
    message: ""  
};

if (formDataIsSaved) {
  const returnFormData = JSON.parse(savedFormData);
  feedbackFormEmail.value = returnFormData.email;
  feedbackFormMessage.value = returnFormData.message;
}

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
  
    if (feedbackFormEmail.value.trim() && feedbackFormMessage.value.trim()) {
      console.log(JSON.parse(localStorage.getItem(localStorageKey)));
      localStorage.removeItem(localStorageKey);
      feedbackForm.reset();
    }
  });

feedbackForm.addEventListener('input', () => {
  const formData = {
    email: feedbackFormEmail.value.trim(),
    message: feedbackFormMessage.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

