const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const messageToUser = document.querySelector("#message-to-user");

checkButton.addEventListener("click", function checkBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const luckyNumb = luckyNumber.value;
  const sum = calculateSum(dob);
  if (sum % luckyNumb === 0) {
    messageToUser.innerText = "Your Birthday Is Lucky 🥳🥳";
  } else {
    messageToUser.innerText = "Your Birthday Is Not Lucky 😕";
  }
});

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}
