// Module ID: 3822
// Function ID: 3823
// Name: yearsToMonths
// Dependencies: [3381, 3559]
// Exports: default

// Module 3822 (yearsToMonths)
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
  return Math.floor(arg0 * require(3559) /* keys */.monthsInYear);
};
export default exports.default;
