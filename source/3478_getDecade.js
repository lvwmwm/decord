// Module ID: 3478
// Function ID: 26874
// Name: getDecade
// Dependencies: [3210, 3211]
// Exports: default

// Module 3478 (getDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(defaultResult1).getFullYear() / 10);
};
export default exports.default;
