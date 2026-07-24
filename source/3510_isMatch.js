// Module ID: 3510
// Function ID: 26956
// Name: isMatch
// Dependencies: [3511, 3391, 3210]
// Exports: default

// Module 3510 (isMatch)
import _typeof from "_typeof";
import isValid from "isValid";
import requiredArgs from "requiredArgs";


export default function isMatch(defaultResult1, defaultResult2, sendMessageOptions) {
  requiredArgs.default(2, arguments);
  return isValid.default(_typeof.default(defaultResult1, defaultResult2, new Date(), sendMessageOptions));
};
export default exports.default;
