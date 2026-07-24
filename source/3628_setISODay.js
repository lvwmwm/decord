// Module ID: 3628
// Function ID: 27885
// Name: setISODay
// Dependencies: [3213, 3209, 3357, 3480, 3210]
// Exports: default

// Module 3628 (setISODay)
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
