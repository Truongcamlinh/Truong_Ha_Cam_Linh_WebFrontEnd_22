let a = [];
a.push("2"); // Thêm 2 vào cuối mảng = ["2"]
a.unshift("1"); // Thêm 1 vào đầu mảng => ["1", "2"]
a.splice(1, 0, "3"); // Chèn 3 vào vị trí index = 1 => ["1", "3", "2"]
console.log(a);
