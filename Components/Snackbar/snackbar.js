const baselineBtn = document.querySelector(".btn-baseline");
const leadingBtn = document.querySelector(".btn-leading");

const baselineMsg = document.querySelector(".baseline");
const leadingMsg = document.querySelector(".leading");

baselineBtn.addEventListener("click", function () {
  baselineMsg.classList.remove("hide");
  setInterval(() => {
    baselineMsg.classList.add("hide");
  }, 5000);
  clearInterval(setInterval);
});
leadingBtn.addEventListener("click", function () {
  leadingMsg.classList.remove("hide");
  setInterval(() => {
    leadingMsg.classList.add("hide");
  }, 5000);
  clearInterval(setInterval);
});
