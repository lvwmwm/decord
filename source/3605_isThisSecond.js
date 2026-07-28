// Module ID: 3605
// Function ID: 27830
// Name: isThisSecond
// Dependencies: [3597, 3245]
// Exports: default

// Module 3605 (isThisSecond)
import isSameSecond from "isSameSecond";
import requiredArgs from "requiredArgs";


export default function isThisSecond(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), defaultResult2);
};
export default exports.default;
