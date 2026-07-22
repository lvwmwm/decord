// Module ID: 4209
// Function ID: 36580
// Name: baseFindIndex
// Dependencies: []

// Module 4209 (baseFindIndex)

export default function baseFindIndex(arg0, arg1, arg2, arg3) {
  let num = -1;
  if (arg3) {
    num = 1;
  }
  const sum = arg2 + num;
  if (arg3) {
    let diff = tmp4 - 1;
    let tmp3 = tmp4;
  } else {
    diff = sum + 1;
    tmp3 = diff < length;
  }
  if (tmp3) {
    while (!arg1(arg0[diff], diff, arg0)) {
      if (arg3) {
        let tmp7 = +diff;
        diff = tmp7 - 1;
        let tmp6 = tmp7;
      } else {
        diff = diff + 1;
        tmp6 = diff < length;
      }
    }
    return diff;
  }
  return -1;
};
