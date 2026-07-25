// Module ID: 3511
// Function ID: 26967
// Name: isMatch
// Dependencies: [3512, 3392, 3211]
// Exports: default

// Module 3511 (isMatch)
import _typeof from "_typeof";
import isValid from "isValid";
import requiredArgs from "requiredArgs";


export default function isMatch(defaultResult1, defaultResult2, sendMessageOptions) {
  requiredArgs.default(2, arguments);
  return isValid.default(_typeof.default(defaultResult1, defaultResult2, new Date(), sendMessageOptions));
};
export default exports.default;
