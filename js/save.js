const saveButton = document.getElementById('save-button');
const saveFileType = document.getElementById('save-options');

saveButton.addEventListener('click', saveToFile);



function saveToFile() {
    const user = { username: 'example' };
    var formData = new FormData();
    //formData.append('username', user.username);

    const todoItems = document.querySelectorAll(".todo-item");
    for(let i = 0; i < todoItems.length; i++) {
      let todoText = todoItems[i].querySelector("p").innerText;
      formData.append(i, todoText);
    }

    fetch('../inc/save.php', {
      method: 'POST', // or 'PUT'
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}