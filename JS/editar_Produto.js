document.addEventListener('DOMContentLoaded', function() {
  const formAdicionar = document.getElementById('formAdicionar');
  const submitButton = document.getElementById('submitButton');
  const editarButton = document.getElementById('editarButton');
  const excluirButton = document.getElementById('excluirButton');

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

  editarButton.addEventListener('click', function() {
    // Aqui você pode adicionar a lógica para enviar os dados para edição
    console.log('Dados enviados para edição');
  });


  excluirButton.addEventListener('click', function() {
    const confirmacao = confirm('Tem certeza de que deseja excluir o produto?');
    if (confirmacao) {
      // Aqui você pode adicionar a lógica para excluir o produto
      console.log('Produto excluído');
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
