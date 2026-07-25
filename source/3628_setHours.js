// Module ID: 3628
// Function ID: 27893
// Name: setHours
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3628 (setHours)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setHours(toInteger, uTCMinutes, uTCSeconds, uTCMilliseconds) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setHours(toInteger.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;
