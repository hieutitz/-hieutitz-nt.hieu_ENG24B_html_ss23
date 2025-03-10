let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    numbers.push(num);
}

if (numbers.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let max = numbers[0];
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            index = i;
        }
    }
    console.log(`Số lớn nhất là ${max} ở vị trí ${index} `);
}
