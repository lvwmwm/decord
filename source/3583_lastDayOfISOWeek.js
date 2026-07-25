// Module ID: 3583
// Function ID: 27763
// Name: lastDayOfISOWeek
// Dependencies: [3584, 3211]
// Exports: default

// Module 3583 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek";
import requiredArgs from "requiredArgs";


export default function lastDayOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
