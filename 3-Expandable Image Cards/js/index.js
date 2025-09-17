const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    //this if statement is responsible for the collapse of the card if it was expanded
    if (this.classList.contains("expanded")) {
      this.classList.remove("expanded");
    }

    //else is responsible for expanding the cards AND collapsing all other cards when a card is expanded
    else {
      cards.forEach((collapse) => {
        collapse.classList.remove("expanded"); //this collapses the expanded card while expanding a current card
      });

      this.classList.add("expanded"); //this expands the current card
    }
  });
});
