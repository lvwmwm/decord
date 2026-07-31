// Module ID: 3714
// Function ID: 3715
// Name: yearsToMonths
// Dependencies: [3273, 3451]
// Exports: default

// Module 3714 (yearsToMonths)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function yearsToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3451) /* keys */.monthsInYear);
};
export default exports.default;
