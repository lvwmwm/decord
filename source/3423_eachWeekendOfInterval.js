// Module ID: 3423
// Function ID: 26659
// Name: eachWeekendOfInterval
// Dependencies: [3415, 3361, 3360, 3210]
// Exports: default

// Module 3423 (eachWeekendOfInterval)
import eachDayOfInterval from "eachDayOfInterval";
import isSunday from "isSunday";
import isWeekend from "isWeekend";
import requiredArgs from "requiredArgs";


export default function eachWeekendOfInterval(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = eachDayOfInterval.default(defaultResult1);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let tmp2 = +num;
      let sum = tmp2 + 1;
      let tmp4 = defaultResult1[tmp2];
      let tmp5 = isWeekend;
      num = sum;
      if (isWeekend.default(tmp4)) {
        let arr = items.push(tmp4);
        let tmp7 = isSunday;
        let sum1 = sum;
        if (isSunday.default(tmp4)) {
          sum1 = sum + 5;
        }
        num = sum1;
      }
    } while (num < defaultResult1.length);
  }
  return items;
};
export default exports.default;
