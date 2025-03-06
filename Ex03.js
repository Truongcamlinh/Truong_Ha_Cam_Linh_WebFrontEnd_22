let input = prompt("Nhập vào một dãy số:");
let isValid = true;
for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    isValid = false;
    break;
  }
}
if (isValid) {
  let reversed = input.split("").reverse().join("");
  console.log(reversed);
} else {
  console.log("Dãy không hợp lệ");
}
