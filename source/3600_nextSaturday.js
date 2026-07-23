// Module ID: 3600
// Function ID: 27797
// Name: nextSaturday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3600 (nextSaturday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 6);
};
export default exports.default;
