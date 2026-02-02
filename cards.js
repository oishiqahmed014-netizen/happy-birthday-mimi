const cards = document.querySelectorAll(".card");
let current = 0;

function showCard(index) {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");
}

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});
