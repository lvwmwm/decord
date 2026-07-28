// Module ID: 3440
// Function ID: 26720
// Name: subISOWeekYears
// Dependencies: [3400, 3245, 3248]
// Exports: default

// Module 3440 (subISOWeekYears)
import addISOWeekYears from "addISOWeekYears";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addISOWeekYears.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
