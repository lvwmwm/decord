// Module ID: 3366
// Function ID: 26488
// Name: addISOWeekYears
// Dependencies: [3214, 3367, 3370, 3211]
// Exports: default

// Module 3366 (addISOWeekYears)
import toInteger from "toInteger";
import getISOWeekYear from "getISOWeekYear";
import setISOWeekYear from "setISOWeekYear";
import requiredArgs from "requiredArgs";


export default function addISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return setISOWeekYear.default(defaultResult1, getISOWeekYear.default(defaultResult1) + toInteger.default(defaultResult1));
};
export default exports.default;
