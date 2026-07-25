// Module ID: 3629
// Function ID: 27896
// Name: setISODay
// Dependencies: [3214, 3210, 3358, 3481, 3211]
// Exports: default

// Module 3629 (setISODay)
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
