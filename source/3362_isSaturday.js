// Module ID: 3362
// Function ID: 26467
// Name: isSaturday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3362 (isSaturday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 6 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
