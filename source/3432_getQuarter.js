// Module ID: 3432
// Function ID: 26695
// Name: getQuarter
// Dependencies: [3244, 3245]
// Exports: default

// Module 3432 (getQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(_typeof.default(defaultResult1).getMonth() / 3) + 1;
};
export default exports.default;
