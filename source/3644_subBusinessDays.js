// Module ID: 3644
// Function ID: 27941
// Name: subBusinessDays
// Dependencies: [3360, 3211, 3214]
// Exports: default

// Module 3644 (subBusinessDays)
import addBusinessDays from "addBusinessDays";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subBusinessDays(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
