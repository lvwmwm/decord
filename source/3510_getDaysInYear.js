// Module ID: 3510
// Function ID: 26971
// Name: getDaysInYear
// Dependencies: [3244, 3511, 3245]
// Exports: default

// Module 3510 (getDaysInYear)
import _typeof from "_typeof";
import isLeapYear from "isLeapYear";
import requiredArgs from "requiredArgs";


export default function getDaysInYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  if ("Invalid Date" === String(date)) {
    const _NaN = NaN;
    return NaN;
  } else {
    let num = 365;
    if (isLeapYear.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;
