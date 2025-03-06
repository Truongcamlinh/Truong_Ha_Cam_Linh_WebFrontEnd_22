let arr = [3, 7, 2, 7, 5, 3, 9, 7, 2, 7];
let num = parseInt(prompt("Nhập một số nguyên cần tìm:"));
if (isNaN(num)) {
  console.log("Vui lòng nhập một số nguyên hợp lệ.");
} else {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  if (count > 0) {
    console.log(`Số ${num} xuất hiện ${count} lần trong mảng.`);
  } else {
    console.log(`Số ${num} không tồn tại trong mảng.`);
  }
}
