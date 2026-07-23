// Module ID: 3444
// Function ID: 26756
// Name: getUTCDayOfYear
// Dependencies: [3209, 3210]
// Exports: default

// Module 3444 (getUTCDayOfYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

let c2 = 86400000;

export default function getUTCDayOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / c2) + 1;
};
export default exports.default;
