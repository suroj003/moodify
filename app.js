const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  let value = searchInput.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let title = card.innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  let value = searchInput.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let title = card.innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});