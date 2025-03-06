let input = prompt("Nhập vào dãy số");
let arr = input.split("").map(Number);
if (arr.some(isNaN)) {
  console.log("Dãy không hợp lệ!");
} else {
  let maxValue = Math.max(...arr);
  console.log(`Phần tử lớn nhất trong mảng: ${maxValue}`);
}
