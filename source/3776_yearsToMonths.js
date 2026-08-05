// Module ID: 3776
// Function ID: 3777
// Name: yearsToMonths
// Dependencies: [3335, 3513]
// Exports: default

// Module 3776 (yearsToMonths)
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
  return Math.floor(arg0 * require(3513) /* keys */.monthsInYear);
};
export default exports.default;
