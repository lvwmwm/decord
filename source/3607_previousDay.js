// Module ID: 3607
// Function ID: 27825
// Name: previousDay
// Dependencies: [3210, 3472, 3580]
// Exports: default

// Module 3607 (previousDay)
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
