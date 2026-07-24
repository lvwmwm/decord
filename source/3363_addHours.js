// Module ID: 3363
// Function ID: 26471
// Name: addHours
// Dependencies: [3213, 3364, 3210]
// Exports: default

// Module 3363 (addHours)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

let c3 = 3600000;

export default function addHours(div, defaultResult1, byhour) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(div, toInteger.default(defaultResult1) * c3);
};
export default exports.default;
