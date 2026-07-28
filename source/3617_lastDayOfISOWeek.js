// Module ID: 3617
// Function ID: 27866
// Name: lastDayOfISOWeek
// Dependencies: [3618, 3245]
// Exports: default

// Module 3617 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek";
import requiredArgs from "requiredArgs";


export default function lastDayOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
