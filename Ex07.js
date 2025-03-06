let arr = [5, 2, 9, 1, 7, 6, 3, 8, 4, 0];
console.log("Mảng ban đầu:", arr.join(", "));
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Mảng sau khi sắp xếp tăng dần:", arr.join(", "));
