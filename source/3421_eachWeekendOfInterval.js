// Module ID: 3421
// Function ID: 26654
// Name: eachWeekendOfInterval
// Dependencies: [3383, 3405, 3410, 3453]
// Exports: default

// Module 3421 (eachWeekendOfInterval)
import compareAsc from "compareAsc";
import differenceInMonths from "differenceInMonths";
import differenceInSeconds from "differenceInSeconds";
import module_3453 from "module_3453";


export default function eachWeekendOfInterval(defaultResult1) {
  module_3453.default(1, arguments);
  defaultResult1 = compareAsc.default(defaultResult1);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let tmp2 = +num;
      let sum = tmp2 + 1;
      let tmp4 = defaultResult1[tmp2];
      let tmp5 = closure_2;
      num = sum;
      if (closure_2.default(tmp4)) {
        let arr = items.push(tmp4);
        let tmp7 = closure_1;
        let sum1 = sum;
        if (closure_1.default(tmp4)) {
          sum1 = sum + 5;
        }
        num = sum1;
      }
    } while (num < defaultResult1.length);
  }
  return items;
};
export default exports.default;
