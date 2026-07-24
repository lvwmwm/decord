// Module ID: 3630
// Function ID: 27891
// Name: setMilliseconds
// Dependencies: [3213, 3209, 3210]
// Exports: default

// Module 3630 (setMilliseconds)
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
