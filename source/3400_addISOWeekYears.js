// Module ID: 3400
// Function ID: 26591
// Name: addISOWeekYears
// Dependencies: [3248, 3401, 3404, 3245]
// Exports: default

// Module 3400 (addISOWeekYears)
import toInteger from "toInteger";
import getISOWeekYear from "getISOWeekYear";
import setISOWeekYear from "setISOWeekYear";
import requiredArgs from "requiredArgs";


export default function addISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return setISOWeekYear.default(defaultResult1, getISOWeekYear.default(defaultResult1) + toInteger.default(defaultResult1));
};
export default exports.default;
