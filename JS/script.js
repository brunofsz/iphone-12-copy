const escolheCor = document.querySelectorAll("#escolheImg li");
const img = document.querySelector("#productImg");

escolheCor.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selecionado = document.querySelector(".selected");

    selecionado.classList.remove("selected");

    img.classList.add("changing");
    document.querySelector(`#${btn.id} .color`).classList.add("selected");

    setTimeout(() => {
      img.src = `./Assets/iphone_${btn.id}.jpg`;
      img.classList.remove("changing");
    }, 200);
  });
});
