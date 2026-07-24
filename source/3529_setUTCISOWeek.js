// Module ID: 3529
// Function ID: 27257
// Name: setUTCISOWeek
// Dependencies: [3213, 3209, 3445, 3210]
// Exports: default

// Module 3529 (setUTCISOWeek)
import toInteger from "toInteger";
import _typeof from "_typeof";
import getUTCISOWeek from "getUTCISOWeek";
import requiredArgs from "requiredArgs";


export default function setUTCISOWeek(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const diff = getUTCISOWeek.default(defaultResult1) - toInteger.default(defaultResult1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
