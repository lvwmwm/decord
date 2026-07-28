// Module ID: 3395
// Function ID: 26576
// Name: isWeekend
// Dependencies: [3244, 3245]
// Exports: default

// Module 3395 (isWeekend)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isWeekend(defaultResult1) {
  requiredArgs.default(1, arguments);
  const day = _typeof.default(defaultResult1).getDay();
  let tmp3 = 0 === day;
  if (!tmp3) {
    tmp3 = 6 === day;
  }
  return tmp3;
};
export default exports.default;
