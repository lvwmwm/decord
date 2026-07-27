// Module ID: 3443
// Function ID: 26728
// Name: subMilliseconds
// Dependencies: [3365, 3211, 3214]
// Exports: default

// Module 3443 (subMilliseconds)
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subMilliseconds(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
