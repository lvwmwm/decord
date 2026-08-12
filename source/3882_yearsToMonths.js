// Module ID: 3882
// Function ID: 3883
// Name: yearsToMonths
// Dependencies: [3441, 3619]
// Exports: default

// Module 3882 (yearsToMonths)
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
  return Math.floor(arg0 * require(3619) /* keys */.monthsInYear);
};
export default exports.default;
