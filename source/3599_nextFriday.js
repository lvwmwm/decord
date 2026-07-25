// Module ID: 3599
// Function ID: 27803
// Name: nextFriday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3599 (nextFriday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 5);
};
export default exports.default;
