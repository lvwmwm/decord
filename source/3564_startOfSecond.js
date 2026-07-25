// Module ID: 3564
// Function ID: 27706
// Name: startOfSecond
// Dependencies: [3210, 3211]
// Exports: default

// Module 3564 (startOfSecond)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfSecond(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMilliseconds(0);
  return defaultResult1;
};
export default exports.default;
