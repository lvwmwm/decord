// Module ID: 3406
// Function ID: 26618
// Name: subISOWeekYears
// Dependencies: [3366, 3211, 3214]
// Exports: default

// Module 3406 (subISOWeekYears)
import addISOWeekYears from "addISOWeekYears";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addISOWeekYears.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
