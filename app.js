const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const colour = formData.get("colour");
//   localStorage.setItem("colour", colour);
// });

// const colour = localStorage.getItem("colour");
// if (colour) {
//   const input = document.querySelector("input");
//   input.value = colour;
// }

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  const preferences = {
    colour,
  };
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}
