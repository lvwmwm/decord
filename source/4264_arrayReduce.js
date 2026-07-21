// Module ID: 4264
// Function ID: 37339
// Name: arrayReduce
// Dependencies: []

// Module 4264 (arrayReduce)

export default function arrayReduce(arg0, arg1, arg2, arg3) {
  let first = arg2;
  let tmp2 = arg3;
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (tmp2) {
    tmp2 = num;
  }
  let num2 = -1;
  if (tmp2) {
    first = arg0[0];
    num2 = 0;
  }
  let sum = num2 + 1;
  let tmp4 = first;
  let tmp5 = first;
  if (sum < num) {
    do {
      let tmp6 = tmp4;
      let tmp7 = sum;
      let tmp8 = arg0;
      tmp4 = arg1(tmp4, arg0[sum], sum, arg0);
      sum = sum + 1;
      tmp5 = tmp4;
    } while (sum < num);
  }
  return tmp5;
};
