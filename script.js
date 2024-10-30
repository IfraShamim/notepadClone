function toggleMenu(event, menuId) {
  event.preventDefault();
  const submenu = document.getElementById(menuId);
  document.querySelectorAll(".submenu").forEach((menu) => {
    if (menu !== submenu) menu.style.display = "none";
  });
  submenu.style.display = submenu.style.display == "block" ? "none" : "block";
  event.stopPropagation();
}
// Close menus when clicking on outside
document.addEventListener("click", function () {
  document.querySelectorAll(".submenu").forEach((menu) => {
    menu.style.display = "none";
  });
});
// New File
function newFile() {
  document.getElementById("editor").value = "";
}
// Save File
function saveFile() {
  const content = document.getElementById("editor").value;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Untitled.txt";
  link.click();
}
// Open File
function openFile() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".txt";
  fileInput.onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("editor").value = e.target.result;
      };
      reader.readAsText(file);
    }
  };
  fileInput.click();
}
// Clear Editor
function clearEditor() {
  document.getElementById("editor").value = "";
}
// Text formatting functions
function toggleBold() {
  const editor = document.getElementById("editor");
  editor.style.fontWeight =
    editor.style.fontWeight === "bold" ? "normal" : "bold";
}
function toggleItalic() {
  const editor = document.getElementById("editor");
  editor.style.fontStyle =
    editor.style.fontStyle === "italic" ? "normal" : "italic";
}
function toggleUnderline() {
  const editor = document.getElementById("editor");
  editor.style.textDecoration =
    editor.style.textDecoration === "underline" ? "none" : "underline";
}
function changeFontFamily(font) {
  document.getElementById("editor").style.fontFamily = font;
}
function setFontSize(size) {
  document.getElementById("editor").style.fontSize = `${size}px`;
}
// Clipboard actions
function cutText() {
  document.execCommand("cut");
}
function copyText() {
  document.execCommand("copy");
}
function pasteText() {
  document.execCommand("paste");
}
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
