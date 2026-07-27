// Module ID: 3368
// Function ID: 26495
// Name: startOfISOWeek
// Dependencies: [3369, 3211]
// Exports: default

// Module 3368 (startOfISOWeek)
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";


export default function startOfISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(defaultResult1, { weekStartsOn: 1 });
};
export default exports.default;
