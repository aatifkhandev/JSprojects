const count = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let countValue = 0;

incrementBtn.addEventListener("click", function() {
  countValue += 1;
  count.innerHTML = countValue;
});

decrementBtn.addEventListener("click", function() {
  countValue -= 1;
  count.innerHTML = countValue;
});