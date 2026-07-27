// Module ID: 3652
// Function ID: 27965
// Name: yearsToMonths
// Dependencies: [3211, 3389]
// Exports: default

// Module 3652 (yearsToMonths)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function yearsToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3389) /* keys */.monthsInYear);
};
export default exports.default;
