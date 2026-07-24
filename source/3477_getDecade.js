// Module ID: 3477
// Function ID: 26863
// Name: getDecade
// Dependencies: [3209, 3210]
// Exports: default

// Module 3477 (getDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(defaultResult1).getFullYear() / 10);
};
export default exports.default;
