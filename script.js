const $ = document;
const themeCssVar = $.querySelector(":root");
const colorBtns = $.querySelectorAll(".btn");

colorBtns.forEach((colorBtn) => {
  colorBtn.addEventListener("click", (event) => {
    let mainThemeColor = event.target.dataset.color;

    themeCssVar.style.setProperty("--theme-color", mainThemeColor);
  });
});
