let arr = [12, 7, 45, 8, 33];
let oddSum = 0;
let evenSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
}
console.log(`Tổng các số lẻ trong mảng: ${oddSum}`);
console.log(`Tổng các số chẵn trong mảng: ${evenSum}`);
