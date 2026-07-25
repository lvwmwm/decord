// Module ID: 3422
// Function ID: 26665
// Name: startOfQuarter
// Dependencies: [3210, 3211]
// Exports: default

// Module 3422 (startOfQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;
