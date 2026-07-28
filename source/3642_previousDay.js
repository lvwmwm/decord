// Module ID: 3642
// Function ID: 27939
// Name: previousDay
// Dependencies: [3245, 3507, 3615]
// Exports: default

// Module 3642 (previousDay)
import requiredArgs from "requiredArgs";
import getDay from "getDay";
import subDays from "subDays";


export default function previousDay(defaultResult1) {
  requiredArgs.default(2, arguments);
  const diff = getDay.default(defaultResult1) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(defaultResult1, sum);
};
export default exports.default;
