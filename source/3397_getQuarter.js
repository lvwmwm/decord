// Module ID: 3397
// Function ID: 26581
// Name: getQuarter
// Dependencies: [3209, 3210]
// Exports: default

// Module 3397 (getQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(_typeof.default(defaultResult1).getMonth() / 3) + 1;
};
export default exports.default;
