// Module ID: 3397
// Function ID: 26582
// Name: isSaturday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3397 (isSaturday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 6 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
