const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('image', fileInput.files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Tratar a resposta do servidor, se necessário
  })
  .catch(error => {
    console.error(error);
  });
});
