// Module ID: 3442
// Function ID: 26715
// Name: subMilliseconds
// Dependencies: [3364, 3210, 3213]
// Exports: default

// Module 3442 (subMilliseconds)
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subMilliseconds(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
