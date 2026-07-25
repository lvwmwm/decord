// Module ID: 3364
// Function ID: 26482
// Name: addHours
// Dependencies: [3214, 3365, 3211]
// Exports: default

// Module 3364 (addHours)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 3600000;

export default function addHours(div, defaultResult1, byhour) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
