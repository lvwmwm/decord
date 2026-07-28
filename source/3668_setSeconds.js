// Module ID: 3668
// Function ID: 28014
// Name: setSeconds
// Dependencies: [3248, 3244, 3245]
// Exports: default

// Module 3668 (setSeconds)
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
