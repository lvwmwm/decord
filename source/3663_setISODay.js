// Module ID: 3663
// Function ID: 27999
// Name: setISODay
// Dependencies: [3248, 3244, 3392, 3515, 3245]
// Exports: default

// Module 3663 (setISODay)
import toInteger from "toInteger";
import _typeof from "_typeof";
import addDays from "addDays";
import getISODay from "getISODay";
import requiredArgs from "requiredArgs";


export default function setISODay(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  return addDays.default(defaultResult1, toInteger.default(defaultResult1) - getISODay.default(defaultResult1));
};
export default exports.default;
