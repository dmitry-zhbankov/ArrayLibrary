let arrLib = {};

arrLib = (function (context) {
    context.max = function (arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    context.min = function (arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    };

    context.mean = function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    };

    let sortBubble = function (arr) {
        let n = arr.length;
        let swapped;
        for (let i = 0; i < n - 1; i++) {
            swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j);
                    swapped = true;
                }
            }
            if (swapped === false) {
                break;
            }
        }
        return arr;
    };

    let swap = function (arr, j) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
    };

    let sortSelection = function (arr) {
        let n = arr.length;
        let min_idx;
        for (let i = 0; i < n - 1; i++) {
            min_idx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }
            let tmp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = tmp;
        }
        return arr;
    };

    context.sort = function (arr, algorithm) {
        switch (algorithm) {
            case "bubble":
                return sortBubble(arr);
            case "selection":
                return sortSelection(arr);
            default:
                return new Error("Unsupported algorithm")
        }
    };

    context.getMaxSubSum = function (arr) {
        if (arr.length === 0)
            return null;
        let maxSum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                let sum = 0;
                for (let k = i; k <= j; k++) {
                    sum += arr[k];
                }
                if (sum > maxSum) {
                    maxSum = sum;
                }
            }
        }
        return maxSum;
    };

    return context;

})(arrLib);

module.exports = arrLib;
