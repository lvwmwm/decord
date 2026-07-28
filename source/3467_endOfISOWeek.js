// Module ID: 3467
// Function ID: 26801
// Name: endOfISOWeek
// Dependencies: [3468, 3245]
// Exports: default

// Module 3467 (endOfISOWeek)
import endOfWeek from "endOfWeek";
import requiredArgs from "requiredArgs";


export default function endOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
