// Module ID: 3602
// Function ID: 27812
// Name: nextSunday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3602 (nextSunday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 0);
};
export default exports.default;
