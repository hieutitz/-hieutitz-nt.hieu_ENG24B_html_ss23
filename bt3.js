let n;
do {
    n = +prompt("Nhập số phần tử của mảng:");
} while (isNaN(n) || n <= 0 || n % 1 !== 0);

let numbers = [];
for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    numbers.push(num);
}

let count = 0;
for (let num of numbers) {
    if (num < 0) {
        count++;
    }
}
console.log(`Số lượng số nguyên âm trong mảng: ${count}`);
