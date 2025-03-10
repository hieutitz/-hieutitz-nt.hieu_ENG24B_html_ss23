let n = +prompt("Nhập số lượng phần tử của mảng:");

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
    }

    let isFibo = true;

    if (arr.length < 2 || arr[0] !== 0 || arr[1] !== 1) {
        isFibo = false;
    } else {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibo = false;
                break;
            }
        }
    }

    if (isFibo) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}
