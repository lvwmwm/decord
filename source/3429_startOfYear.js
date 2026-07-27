// Module ID: 3429
// Function ID: 26687
// Name: startOfYear
// Dependencies: [3210, 3211]
// Exports: default

// Module 3429 (startOfYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(_typeof.default(defaultResult1).getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
export default exports.default;
