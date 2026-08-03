// Module ID: 3740
// Function ID: 3741
// Name: quartersToMonths
// Dependencies: [3335, 3513]
// Exports: default

// Module 3740 (quartersToMonths)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function quartersToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3513) /* keys */.monthsInQuarter);
};
export default exports.default;
