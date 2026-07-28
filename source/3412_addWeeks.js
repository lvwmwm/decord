// Module ID: 3412
// Function ID: 26626
// Name: addWeeks
// Dependencies: [3248, 3392, 3245]
// Exports: default

// Module 3412 (addWeeks)
import toInteger from "toInteger";
import addDays from "addDays";
import requiredArgs from "requiredArgs";


export default function addWeeks(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addDays.default(defaultResult1, 7 * toInteger.default(defaultResult1));
};
export default exports.default;
