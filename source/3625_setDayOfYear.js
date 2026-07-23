// Module ID: 3625
// Function ID: 27876
// Name: setDayOfYear
// Dependencies: [3213, 3209, 3210]
// Exports: default

// Module 3625 (setDayOfYear)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setDayOfYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMonth(0);
  defaultResult1.setDate(toInteger.default(defaultResult1));
  return defaultResult1;
};
export default exports.default;
