// Module ID: 3505
// Function ID: 26951
// Name: isBefore
// Dependencies: [3210, 3211]
// Exports: default

// Module 3505 (isBefore)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isBefore(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time < _typeof.default(defaultResult1).getTime();
};
export default exports.default;
