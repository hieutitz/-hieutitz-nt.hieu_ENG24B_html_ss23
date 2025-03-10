let n;
do {
    n = +prompt("Nhập số phần tử của mảng:");
} while (isNaN(n) || n < 0 || n % 1 !== 0);

let arr = [];
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập phần tử thứ ${i + 1}:`);
    arr.push(char);
}

let numbers = [];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        numbers.push(arr[i]);
    }
}

if (numbers.length > 0) {
    console.log(`Ký tự số trong mảng: ${numbers}`);
} else {
    console.log("Không có ký tự số");
}
