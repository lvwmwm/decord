// Module ID: 3636
// Function ID: 27915
// Name: nextSunday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3636 (nextSunday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 0);
};
export default exports.default;
