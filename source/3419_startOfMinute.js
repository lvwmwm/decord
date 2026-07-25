// Module ID: 3419
// Function ID: 26656
// Name: startOfMinute
// Dependencies: [3210, 3211]
// Exports: default

// Module 3419 (startOfMinute)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfMinute(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setSeconds(0, 0);
  return defaultResult1;
};
export default exports.default;
