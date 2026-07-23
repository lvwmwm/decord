// Module ID: 3562
// Function ID: 27691
// Name: isSameSecond
// Dependencies: [3563, 3210]
// Exports: default

// Module 3562 (isSameSecond)
import startOfSecond from "startOfSecond";
import requiredArgs from "requiredArgs";


export default function isSameSecond(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfSecond.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfSecond.default(defaultResult1).getTime();
};
export default exports.default;
