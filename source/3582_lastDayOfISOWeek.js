// Module ID: 3582
// Function ID: 27752
// Name: lastDayOfISOWeek
// Dependencies: [3583, 3210]
// Exports: default

// Module 3582 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek";
import requiredArgs from "requiredArgs";


export default function lastDayOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
