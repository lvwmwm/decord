// Module ID: 3634
// Function ID: 27909
// Name: nextMonday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3634 (nextMonday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 1);
};
export default exports.default;
