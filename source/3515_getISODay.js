// Module ID: 3515
// Function ID: 26985
// Name: getISODay
// Dependencies: [3244, 3245]
// Exports: default

// Module 3515 (getISODay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function getISODay(defaultResult1) {
  requiredArgs.default(1, arguments);
  let num = _typeof.default(defaultResult1).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;
