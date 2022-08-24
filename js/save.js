const saveButton = document.getElementById('save-button');
const saveFileType = document.getElementById('save-options');

saveButton.addEventListener('click', saveToFile);



function saveToFile() {
    const data = { username: 'example' };

    fetch('inc/save.php', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}