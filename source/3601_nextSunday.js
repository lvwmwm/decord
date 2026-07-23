// Module ID: 3601
// Function ID: 27800
// Name: nextSunday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3601 (nextSunday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 0);
};
export default exports.default;
