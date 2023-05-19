let inputText = document.querySelector("input#inp");
let btn = document.querySelector("button#btn");
let boxes = document.querySelectorAll(".box");
let drag = null;
btn.onclick = () => {
  if (inputText.value != "") {
    boxes[0].innerHTML += `
        <p class="item" draggable="true">${inputText.value}</p>
        `;
    inputText.value = "";
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.backgroundColor = "#090";
        box.style.color = "#fff";
      });
      box.addEventListener("dragleave", () => {
        box.style.backgroundColor = "#fff";
        box.style.color = "#000";
      });
      box.addEventListener("drop", () => {
        box.append(drag);
        box.style.backgroundColor = "#fff";
        box.style.color = "#000";
      });
    });
  });
}
