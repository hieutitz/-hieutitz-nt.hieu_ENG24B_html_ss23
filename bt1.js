let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    numbers.push(num);
}

let result = [];
for (let num of numbers) {
    if (num >= 10) {
        result.push(num);
    }
}

console.log(`số nguyên lớn hơn hoặc bằng 10 trong mảng là: ${result}`);
