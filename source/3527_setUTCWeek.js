// Module ID: 3527
// Function ID: 27233
// Name: setUTCWeek
// Dependencies: [3213, 3209, 3449, 3210]
// Exports: default

// Module 3527 (setUTCWeek)
import toInteger from "toInteger";
import _typeof from "_typeof";
import getUTCWeek from "getUTCWeek";
import requiredArgs from "requiredArgs";


export default function setUTCWeek(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const diff = getUTCWeek.default(defaultResult1, defaultResult2) - toInteger.default(defaultResult1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
