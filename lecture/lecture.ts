let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;

const word = document.createElement("div");
word.textContent = `${numberOne} 곱하기 ${numberTwo}`;
document.body.append(word);

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
input.type = "number";
form.append(input);

const button = document.createElement("button");
button.textContent = "입력";
form.append(button);

const resultDiv = document.createElement("div");
document.body.append(resultDiv);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (result === Number(input.value)) {
    // 정답 맞춘경우
    resultDiv.textContent = "정답맞춤";
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    result = numberOne * numberTwo;
    word.textContent = `${numberOne} 곱하기 ${numberTwo}`;
    input.value = "";
    input.focus();
  } else {
    // 정답 틀린경우
    resultDiv.textContent = "떙";
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    result = numberOne * numberTwo;
    word.textContent = `${numberOne} 곱하기 ${numberTwo}`;
    input.value = "";
    input.focus();
  }
});
