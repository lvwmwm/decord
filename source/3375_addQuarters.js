// Module ID: 3375
// Function ID: 26506
// Name: addQuarters
// Dependencies: [3213, 3358, 3210]
// Exports: default

// Module 3375 (addQuarters)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addQuarters(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(defaultResult1, 3 * toInteger.default(defaultResult1));
};
export default exports.default;
