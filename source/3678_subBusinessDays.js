// Module ID: 3678
// Function ID: 28044
// Name: subBusinessDays
// Dependencies: [3394, 3245, 3248]
// Exports: default

// Module 3678 (subBusinessDays)
import addBusinessDays from "addBusinessDays";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subBusinessDays(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
