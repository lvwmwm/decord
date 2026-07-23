// Module ID: 3421
// Function ID: 26653
// Name: startOfQuarter
// Dependencies: [3209, 3210]
// Exports: default

// Module 3421 (startOfQuarter)
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
