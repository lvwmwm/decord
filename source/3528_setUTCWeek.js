// Module ID: 3528
// Function ID: 27244
// Name: setUTCWeek
// Dependencies: [3214, 3210, 3450, 3211]
// Exports: default

// Module 3528 (setUTCWeek)
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
