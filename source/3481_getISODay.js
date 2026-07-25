// Module ID: 3481
// Function ID: 26882
// Name: getISODay
// Dependencies: [3210, 3211]
// Exports: default

// Module 3481 (getISODay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getISODay(defaultResult1) {
  requiredArgs.default(1, arguments);
  let num = _typeof.default(defaultResult1).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;
