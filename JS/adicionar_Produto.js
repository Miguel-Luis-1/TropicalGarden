document.addEventListener('DOMContentLoaded', function() {
    const formAdicionar = document.getElementById('formAdicionar');
    const submitButton = document.getElementById('submitButton');
  
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
      input.addEventListener('input', function() {
        const isFormValid = validateForm();
        submitButton.disabled = !isFormValid;
      });
    });
  
    formAdicionar.addEventListener('submit', function(event) {
      const isFormValid = validateForm();
      if (!isFormValid) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  
    function validateForm() {
      let isFormValid = true;
      inputs.forEach(function(input) {
        if (input.required && input.value.trim() === '') {
          isFormValid = false;
        }
      });
      return isFormValid;
    }
  });
  