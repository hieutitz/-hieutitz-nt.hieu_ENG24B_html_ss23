let arr = [0, 1, false, 2, '', 3, null, undefined, NaN, 4, "hello"];

for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
