// Module ID: 3361
// Function ID: 26473
// Name: isWeekend
// Dependencies: [3210, 3211]
// Exports: default

// Module 3361 (isWeekend)
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
