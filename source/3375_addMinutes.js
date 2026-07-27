// Module ID: 3375
// Function ID: 26515
// Name: addMinutes
// Dependencies: [3214, 3365, 3211]
// Exports: default

// Module 3375 (addMinutes)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 60000;

export default function addMinutes(div, defaultResult1, byhour, byminute) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
