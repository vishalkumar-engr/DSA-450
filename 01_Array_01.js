/* Reverse an array or string */

const reverseArray = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
printArray(arr)
reverseArray(arr, 0, arr.length - 1)
console.log("Reversed array is");
printArray(arr)
