let sec_num = Math.trunc(Math.random() * 20) + 1;
console.log(sec_num);
const num = document.querySelector(".num-guess");
const check = document.querySelector(".btn-check");

const mess = document.querySelector(".success");
const bann = document.querySelector(".banner");

check.addEventListener("click", function () {
  const num = Number(document.querySelector(".num-guess").value);
  console.log(num, typeof num);
  if (!num) {
    mess.textContent = "Please Enter a number";
  } else if (num === sec_num) {
    mess.textContent = "Wohoo! you have won the game";
    document.querySelector("body").style.backgroundColor = "#44bd32";
    bann.textContent = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  } else {
    mess.textContent = "Try Again";
  }
});
document.querySelector(".btn-again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#0097e6";
  mess.textContent = "Checking Your Number";
  bann.textContent = "Guess a number between 1 to 20";
  sec_num = Math.trunc(Math.random() * 20) + 1;
  num.value = "";
  console.log(sec_num);
});

// document.querySelector("body").style.backgroundColor = "#0097e6";
// mess.textContent = "Checking Your Number";
// bann.textContent = "Guess a number between 1 to 20";
// sec_num = Math.trunc(Math.random() * 20) + 1;
// console.log(sec_num);
