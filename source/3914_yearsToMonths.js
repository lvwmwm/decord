// Module ID: 3914
// Function ID: 3915
// Name: yearsToMonths
// Dependencies: [3473, 3651]
// Exports: default

// Module 3914 (yearsToMonths)
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
  return Math.floor(arg0 * require(3651) /* keys */.monthsInYear);
};
export default exports.default;
