const commentaryForm= document.querySelector("#commentaryForm");
commentaryForm.addEventListener("submit", (e) => {
    e.preventDefault();

const name = document.getElementById("nameInput").value;
const commentary = document.getElementById("commentaryInput").value

const commentElement = document.createElement("div");
commentElement.classList.add("comment");
commentElement.innerHTML = `
<strong>${name}</strong>
<p>${commentary}</p>
<hr>`;

commentsContainer.appendchild(commentElement);
document.getElementById("nameInput").value="";
document.getElementById("commentaryInput").value="";
});