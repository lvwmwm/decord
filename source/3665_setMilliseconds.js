// Module ID: 3665
// Function ID: 28005
// Name: setMilliseconds
// Dependencies: [3248, 3244, 3245]
// Exports: default

// Module 3665 (setMilliseconds)
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
