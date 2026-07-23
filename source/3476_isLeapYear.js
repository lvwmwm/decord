// Module ID: 3476
// Function ID: 26859
// Name: isLeapYear
// Dependencies: [3209, 3210]
// Exports: default

// Module 3476 (isLeapYear)
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
