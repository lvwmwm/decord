// Module ID: 3367
// Function ID: 26482
// Name: startOfISOWeek
// Dependencies: [3368, 3210]
// Exports: default

// Module 3367 (startOfISOWeek)
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";


export default function startOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
