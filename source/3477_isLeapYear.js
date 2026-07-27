// Module ID: 3477
// Function ID: 26872
// Name: isLeapYear
// Dependencies: [3210, 3211]
// Exports: default

// Module 3477 (isLeapYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isLeapYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  const fullYear = _typeof.default(defaultResult1).getFullYear();
  let tmp3 = fullYear % 400 === 0;
  if (!tmp3) {
    let tmp4 = fullYear % 4 === 0;
    if (tmp4) {
      tmp4 = fullYear % 100 !== 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export default exports.default;
