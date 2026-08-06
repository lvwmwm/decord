// Module ID: 3805
// Function ID: 3806
// Name: yearsToMonths
// Dependencies: [3364, 3542]
// Exports: default

// Module 3805 (yearsToMonths)
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
  return Math.floor(arg0 * require(3542) /* keys */.monthsInYear);
};
export default exports.default;
