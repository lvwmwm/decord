// Module ID: 3512
// Function ID: 26977
// Name: getDecade
// Dependencies: [3244, 3245]
// Exports: default

// Module 3512 (getDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getDecade(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(defaultResult1).getFullYear() / 10);
};
export default exports.default;
