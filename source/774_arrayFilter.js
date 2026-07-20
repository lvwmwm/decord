// Module ID: 774
// Function ID: 8846
// Name: arrayFilter
// Dependencies: []

// Module 774 (arrayFilter)

export default function arrayFilter(arg0, arg1) {
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
      let tmp2 = num2;
      let sum = num3;
      if (arg1(tmp, num2, arg0)) {
        let tmp4 = +num3;
        sum = tmp4 + 1;
        items[tmp4] = tmp;
      }
      num2 = num2 + 1;
      num3 = sum;
    } while (num2 < num);
  }
  return items;
};
