document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultsDiv = document.querySelector("#results");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const paragraph = document.createElement("p");

    const text = `Name: ${name}, Email: ${email}, Password: ${password}`;

    paragraph.textContent = text;

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    paragraph.style.color = randomColor;

    resultsDiv.appendChild(paragraph);

    form.reset();
  });
});
