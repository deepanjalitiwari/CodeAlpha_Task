let Btn = document.getElementById("Btn");
let newtask = document.getElementById("newtask");
let taskl = document.getElementById("taskl");

Btn.addEventListener("click", function () {
  let taskText = newtask.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle done on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Add delete button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // stop li click
    li.remove();
  });

  li.appendChild(removeBtn);
  taskl.appendChild(li);
  newtask.value = ""; // clear input
});
