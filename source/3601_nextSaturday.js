// Module ID: 3601
// Function ID: 27809
// Name: nextSaturday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3601 (nextSaturday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 6);
};
export default exports.default;
