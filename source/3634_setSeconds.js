// Module ID: 3634
// Function ID: 27911
// Name: setSeconds
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3634 (setSeconds)
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
