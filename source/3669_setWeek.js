// Module ID: 3669
// Function ID: 28017
// Name: setWeek
// Dependencies: [3525, 3244, 3245, 3248]
// Exports: default

// Module 3669 (setWeek)
import getWeek from "getWeek";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function setWeek(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const diff = getWeek.default(defaultResult1, defaultResult2) - toInteger.default(defaultResult1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
