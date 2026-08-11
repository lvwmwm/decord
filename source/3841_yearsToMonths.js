// Module ID: 3841
// Function ID: 3842
// Name: yearsToMonths
// Dependencies: [3400, 3578]
// Exports: default

// Module 3841 (yearsToMonths)
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
  return Math.floor(arg0 * require(3578) /* keys */.monthsInYear);
};
export default exports.default;
