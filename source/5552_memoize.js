// Module ID: 5552
// Function ID: 47084
// Name: memoize
// Dependencies: []

// Module 5552 (memoize)
arg5.default = function memoize(arg0) {
  return () => {
    const length = arguments.length;
    const arr = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      arr[num] = arguments[num];
    }
    let flag = true;
    if (arr) {
      flag = true;
      if (arr.length === arr.length) {
        let num2 = 0;
        flag = false;
        if (0 < arr.length) {
          flag = true;
          while (arr[num2] === arr[num2]) {
            num2 = num2 + 1;
            let tmp4 = arr;
            flag = false;
            if (num2 >= arr.length) {
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      flag = undefined === closure_2;
    }
    if (flag) {
      closure_2 = arg0.apply(undefined, arr);
    }
    return closure_2;
  };
};
