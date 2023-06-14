document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancelButton');
  
    cancelButton.addEventListener('click', function() {
      const confirmacao = confirm('Tem certeza de que deseja cancelar a compra?');
      if (confirmacao) {
        // Aqui você pode adicionar a lógica para cancelar a compra
        console.log('Compra cancelada');
      }
    });
  });
  