// Module ID: 9404
// Function ID: 73276
// Name: baseSlice
// Dependencies: []

// Module 9404 (baseSlice)

export default function baseSlice(arg0, arg1, arg2) {
  let tmp = arg2;
  let tmp2 = arg1;
  if (arg1 < 0) {
    let num = 0;
    if (-arg1 <= length) {
      num = length + arg1;
    }
    tmp2 = num;
  }
  if (tmp > arg0.length) {
    tmp = length;
  }
  let sum = tmp;
  if (tmp < 0) {
    sum = tmp + length;
  }
  let num2 = 0;
  if (tmp2 <= sum) {
    num2 = sum - tmp2 >>> 0;
  }
  const ArrayResult = Array(num2);
  let num3 = 0;
  if (0 < num2) {
    do {
      ArrayResult[num3] = arg0[num3 + tmp4];
      num3 = num3 + 1;
    } while (num3 < num2);
  }
  return ArrayResult;
};
