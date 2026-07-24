// Module ID: 3374
// Function ID: 26503
// Name: addMinutes
// Dependencies: [3213, 3364, 3210]
// Exports: default

// Module 3374 (addMinutes)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 60000;

export default function addMinutes(div, defaultResult1, byhour, byminute) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
