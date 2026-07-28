// Module ID: 3633
// Function ID: 27906
// Name: nextFriday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3633 (nextFriday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 5);
};
export default exports.default;
