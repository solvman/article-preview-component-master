const shareButton = document.querySelector(".card__share__button");
const shareTooltip = document.querySelector(".card__share__tooltip");

shareButton.addEventListener("click", () => {
  shareTooltip.classList.toggle("active");
});
