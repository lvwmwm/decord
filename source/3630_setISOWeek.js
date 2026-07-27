// Module ID: 3630
// Function ID: 27900
// Name: setISOWeek
// Dependencies: [3214, 3210, 3482, 3211]
// Exports: default

// Module 3630 (setISOWeek)
import toInteger from "toInteger";
import _typeof from "_typeof";
import getISOWeek from "getISOWeek";
import requiredArgs from "requiredArgs";


export default function setISOWeek(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const diff = getISOWeek.default(defaultResult1) - toInteger.default(defaultResult1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
