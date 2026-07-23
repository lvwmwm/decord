// Module ID: 3560
// Function ID: 27685
// Name: isSameMonth
// Dependencies: [3209, 3210]
// Exports: default

// Module 3560 (isSameMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSameMonth(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  let tmp3 = fullYear === defaultResult2.getFullYear();
  if (tmp3) {
    const month = defaultResult1.getMonth();
    tmp3 = month === defaultResult2.getMonth();
  }
  return tmp3;
};
export default exports.default;
