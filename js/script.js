// Generating a random number
let randomNum = Math.floor(Math.random() * 10 + 1);
let guessNum = (document.querySelector(".guess").textContent = randomNum);

//Varefing output
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebtn = document.querySelector(".playeronebtn");
let success = document.querySelector(".success");
let player = document.querySelector(".player");
let playerone = document.querySelector(".playerone");
let wrongnumbr = document.querySelector(".wrongnumbr");
let guessprotect = document.querySelector(".guessprotect");

//Again Btn
let againBtn = document
  .querySelector(".header_btn")
  .addEventListener("click", function () {
    location.reload();
  });

//chance
let chance = document.querySelector(".chance");

//count
let count = document.querySelector(".count");
let countNumber = 5;

//fff
playeronebtn.addEventListener("click", function () {
  //Genareting cuynt
  countNumber--;
  count.textContent = countNumber;

  let guessOutput = playeroneinput.value;
  if (guessOutput == guessNum) {
    success.innerHTML = "You Win";
    player.style.display = "none";
    playerone.style.display = "none";
    wrongnumbr.innerHTML = "";
    chance.style.display = "none";
    guessprotect.style.display = "none";
  } else if (guessOutput < guessNum) {
    wrongnumbr.innerHTML = "It's Low number";
    chance.style.display = "block";
  } else if (guessOutput > guessNum) {
    wrongnumbr.innerHTML = "It's High number";
    chance.style.display = "block";
  } else if (countNumber == 0) {
    console.log("loso");
  }
});
