// Module ID: 3633
// Function ID: 27900
// Name: setSeconds
// Dependencies: [3213, 3209, 3210]
// Exports: default

// Module 3633 (setSeconds)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setSeconds(toInteger, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setSeconds(toInteger.default(defaultResult1));
  return defaultResult1;
};
export default exports.default;
