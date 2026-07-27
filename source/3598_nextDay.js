// Module ID: 3598
// Function ID: 27801
// Name: nextDay
// Dependencies: [3358, 3473, 3211]
// Exports: default

// Module 3598 (nextDay)
import addDays from "addDays";
import getDay from "getDay";
import requiredArgs from "requiredArgs";


export default function nextDay(defaultResult1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - getDay.default(defaultResult1);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return addDays.default(defaultResult1, sum);
};
export default exports.default;
