// Module ID: 3365
// Function ID: 26476
// Name: addISOWeekYears
// Dependencies: [3213, 3366, 3369, 3210]
// Exports: default

// Module 3365 (addISOWeekYears)
import toInteger from "toInteger";
import getISOWeekYear from "getISOWeekYear";
import setISOWeekYear from "setISOWeekYear";
import requiredArgs from "requiredArgs";


export default function addISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return setISOWeekYear.default(defaultResult1, getISOWeekYear.default(defaultResult1) + toInteger.default(defaultResult1));
};
export default exports.default;
