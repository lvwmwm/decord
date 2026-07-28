// Module ID: 3398
// Function ID: 26585
// Name: addHours
// Dependencies: [3248, 3399, 3245]
// Exports: default

// Module 3398 (addHours)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 3600000;

export default function addHours(div, defaultResult1, byhour) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
