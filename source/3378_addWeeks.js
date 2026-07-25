// Module ID: 3378
// Function ID: 26523
// Name: addWeeks
// Dependencies: [3214, 3358, 3211]
// Exports: default

// Module 3378 (addWeeks)
import toInteger from "toInteger";
import addDays from "addDays";
import requiredArgs from "requiredArgs";


export default function addWeeks(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addDays.default(defaultResult1, 7 * toInteger.default(defaultResult1));
};
export default exports.default;
