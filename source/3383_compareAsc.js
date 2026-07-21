// Module ID: 3383
// Function ID: 26535
// Name: compareAsc
// Dependencies: [3366, 3370]
// Exports: default

// Module 3383 (compareAsc)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function compareAsc(defaultResult1, defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - startOfWeek.default(defaultResult1).getTime();
  let num = -1;
  if (diff >= 0) {
    let num2 = 1;
    if (diff <= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
};
export default exports.default;
