// Module ID: 3635
// Function ID: 27912
// Name: nextSaturday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3635 (nextSaturday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 6);
};
export default exports.default;
