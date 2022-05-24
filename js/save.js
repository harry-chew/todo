const saveButton = document.getElementById('save-button');

saveButton.addEventListener("click", saveFile);

function saveFile(event) {
  event.preventDefault();
  var myFile = new File(["CONTENT"], "demo.txt", {type: "text/plain;charset=utf-8"});
  saveAs(myFile);
}
