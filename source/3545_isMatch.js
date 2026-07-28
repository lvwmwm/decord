// Module ID: 3545
// Function ID: 27070
// Name: isMatch
// Dependencies: [3546, 3426, 3245]
// Exports: default

// Module 3545 (isMatch)
import _typeof from "_typeof";
import isValid from "isValid";
import requiredArgs from "requiredArgs";


export default function isMatch(defaultResult1, defaultResult2, sendMessageOptions) {
  requiredArgs.default(2, arguments);
  return isValid.default(_typeof.default(defaultResult1, defaultResult2, new Date(), sendMessageOptions));
};
export default exports.default;
