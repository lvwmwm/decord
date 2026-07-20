// Module ID: 592
// Function ID: 7013
// Name: arrayEach
// Dependencies: []

// Module 592 (arrayEach)

export default function arrayEach(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (0 < num) {
    let num2 = 0;
    if (false !== arg1(arg0[0], 0, arg0)) {
      const sum = num2 + 1;
      while (sum < num) {
        num2 = sum;
        if (false === arg1(arg0[sum], sum, arg0)) {
          break;
        }
      }
    }
  }
  return arg0;
};
