let n = +prompt("Nhập số lượng phần tử của mảng:");

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
    }

    let max1 = 0, max2 = 0;
    let found = false;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
            found = true;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    }

    if (!found) {
        console.log("Không có số lớn thứ hai trong mảng");
    } else {
        console.log(max2 === 0 ? "Không có số lớn thứ hai trong mảng" : `Số lớn thứ hai là: ${max2}`);
    }
}
