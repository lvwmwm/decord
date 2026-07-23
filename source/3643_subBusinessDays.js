// Module ID: 3643
// Function ID: 27929
// Name: subBusinessDays
// Dependencies: [3359, 3210, 3213]
// Exports: default

// Module 3643 (subBusinessDays)
import addBusinessDays from "addBusinessDays";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function subBusinessDays(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(defaultResult1, -toInteger.default(defaultResult1));
};
export default exports.default;
