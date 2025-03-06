let arr = [3, 7, 10, 25, 42, 55, 68];
let userInput = Number(prompt("Nhập một số bất kỳ:"));
if (arr.includes(userInput)) {
  console.log("Bingo");
} else {
  console.log("Chúc bạn may mắn lần sau");
}
