// Module ID: 3405
// Function ID: 26606
// Name: subISOWeekYears
// Dependencies: [3365, 3210, 3213]
// Exports: default

// Module 3405 (subISOWeekYears)
import addISOWeekYears from "addISOWeekYears";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addISOWeekYears.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
