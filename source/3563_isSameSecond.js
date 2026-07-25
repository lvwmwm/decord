// Module ID: 3563
// Function ID: 27703
// Name: isSameSecond
// Dependencies: [3564, 3211]
// Exports: default

// Module 3563 (isSameSecond)
import startOfSecond from "startOfSecond";
import requiredArgs from "requiredArgs";


export default function isSameSecond(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfSecond.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfSecond.default(defaultResult1).getTime();
};
export default exports.default;
