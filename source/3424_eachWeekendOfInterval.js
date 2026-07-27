// Module ID: 3424
// Function ID: 26672
// Name: eachWeekendOfInterval
// Dependencies: [3416, 3362, 3361, 3211]
// Exports: default

// Module 3424 (eachWeekendOfInterval)
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
