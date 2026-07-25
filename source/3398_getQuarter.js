// Module ID: 3398
// Function ID: 26592
// Name: getQuarter
// Dependencies: [3210, 3211]
// Exports: default

// Module 3398 (getQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(_typeof.default(defaultResult1).getMonth() / 3) + 1;
};
export default exports.default;
