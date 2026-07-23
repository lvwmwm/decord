// Module ID: 3377
// Function ID: 26511
// Name: addWeeks
// Dependencies: [3213, 3357, 3210]
// Exports: default

// Module 3377 (addWeeks)
import toInteger from "toInteger";
import addDays from "addDays";
import requiredArgs from "requiredArgs";


export default function addWeeks(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addDays.default(defaultResult1, 7 * toInteger.default(defaultResult1));
};
export default exports.default;
