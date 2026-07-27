// Module ID: 3560
// Function ID: 27695
// Name: isSameMinute
// Dependencies: [3419, 3211]
// Exports: default

// Module 3560 (isSameMinute)
import startOfMinute from "startOfMinute";
import requiredArgs from "requiredArgs";


export default function isSameMinute(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfMinute.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfMinute.default(defaultResult1).getTime();
};
export default exports.default;
