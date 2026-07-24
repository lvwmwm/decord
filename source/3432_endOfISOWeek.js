// Module ID: 3432
// Function ID: 26687
// Name: endOfISOWeek
// Dependencies: [3433, 3210]
// Exports: default

// Module 3432 (endOfISOWeek)
import endOfWeek from "endOfWeek";
import requiredArgs from "requiredArgs";


export default function endOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
