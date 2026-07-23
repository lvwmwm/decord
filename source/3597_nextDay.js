// Module ID: 3597
// Function ID: 27788
// Name: nextDay
// Dependencies: [3357, 3472, 3210]
// Exports: default

// Module 3597 (nextDay)
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
