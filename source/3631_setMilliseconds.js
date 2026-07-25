// Module ID: 3631
// Function ID: 27902
// Name: setMilliseconds
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3631 (setMilliseconds)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setMilliseconds(toInteger, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setMilliseconds(toInteger.default(defaultResult1));
  return defaultResult1;
};
export default exports.default;
