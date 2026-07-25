// Module ID: 3433
// Function ID: 26698
// Name: endOfISOWeek
// Dependencies: [3434, 3211]
// Exports: default

// Module 3433 (endOfISOWeek)
import endOfWeek from "endOfWeek";
import requiredArgs from "requiredArgs";


export default function endOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
