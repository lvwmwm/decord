// Module ID: 15966
// Function ID: 122544
// Name: lowerBound
// Dependencies: []

// Module 15966 (lowerBound)
arg5.default = function lowerBound(arg0) {
  let diff;
  let length = arg0.length;
  let num = 0;
  let num2 = 0;
  if (length > 0) {
    do {
      let tmp = length / 2 | 0;
      let sum = num + tmp;
      diff = tmp;
      if (arg2(arg0[sum], arg1) <= 0) {
        num = sum + 1;
        diff = length - (tmp + 1);
      }
      length = diff;
      num2 = num;
    } while (diff > 0);
  }
  return num2;
};
