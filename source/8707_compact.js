// Module ID: 8707
// Function ID: 68930
// Name: compact
// Dependencies: []

// Module 8707 (compact)

export default function compact(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let tmp = arg0[num2];
      let sum = num3;
      if (tmp) {
        let tmp3 = +num3;
        sum = tmp3 + 1;
        items[tmp3] = tmp;
      }
      num2 = num2 + 1;
      num3 = sum;
    } while (num2 < num);
  }
  return items;
};
