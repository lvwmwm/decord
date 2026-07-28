// Module ID: 3409
// Function ID: 26617
// Name: addMinutes
// Dependencies: [3248, 3399, 3245]
// Exports: default

// Module 3409 (addMinutes)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 60000;

export default function addMinutes(div, defaultResult1, byhour, byminute) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
