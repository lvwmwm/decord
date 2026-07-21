// Module ID: 3405
// Function ID: 26606
// Name: differenceInMonths
// Dependencies: [1929379853, 3362, 3208, 3211, 881271]
// Exports: default

// Module 3405 (differenceInMonths)
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));

export default function differenceInMonths(date, friendsSince) {
  toInteger.default(2, arguments);
  const defaultResult1 = closure_0.default(date);
  const defaultResult2 = closure_0.default(friendsSince);
  const defaultResult3 = requiredArgs.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(addMilliseconds.default(defaultResult1, defaultResult2));
  let num = 0;
  if (absolute >= 1) {
    let tmp5 = 1 === defaultResult1.getMonth();
    if (tmp5) {
      tmp5 = defaultResult1.getDate() > 27;
    }
    if (tmp5) {
      defaultResult1.setDate(30);
    }
    defaultResult1.setMonth(defaultResult1.getMonth() - defaultResult3 * absolute);
    let flag = requiredArgs.default(defaultResult1, defaultResult2) === -defaultResult3;
    let tmp11 = closure_4.default(closure_0.default(date)) && 1 === absolute;
    if (tmp11) {
      tmp11 = 1 === requiredArgs.default(date, defaultResult2);
    }
    if (tmp11) {
      flag = false;
    }
    const _Number = Number;
    num = defaultResult3 * (absolute - Number(flag));
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
};
export default exports.default;
