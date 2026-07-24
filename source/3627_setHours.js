// Module ID: 3627
// Function ID: 27882
// Name: setHours
// Dependencies: [3213, 3209, 3210]
// Exports: default

// Module 3627 (setHours)
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
