// Module ID: 3710
// Function ID: 3711
// Name: yearsToMonths
// Dependencies: [3269, 3447]
// Exports: default

// Module 3710 (yearsToMonths)
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
  return Math.floor(arg0 * require(3447) /* keys */.monthsInYear);
};
export default exports.default;
