// Module ID: 3402
// Function ID: 26597
// Name: startOfISOWeek
// Dependencies: [3403, 3245]
// Exports: default

// Module 3402 (startOfISOWeek)
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";


export default function startOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
