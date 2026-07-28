// Module ID: 3410
// Function ID: 26620
// Name: addQuarters
// Dependencies: [3248, 3393, 3245]
// Exports: default

// Module 3410 (addQuarters)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addQuarters(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(defaultResult1, 3 * toInteger.default(defaultResult1));
};
export default exports.default;
