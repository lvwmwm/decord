// Module ID: 3660
// Function ID: 27991
// Name: setDayOfYear
// Dependencies: [3248, 3244, 3245]
// Exports: default

// Module 3660 (setDayOfYear)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setDayOfYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMonth(0);
  defaultResult1.setDate(toInteger.default(defaultResult1));
  return defaultResult1;
};
export default exports.default;
