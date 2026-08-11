// Module ID: 3805
// Function ID: 3806
// Name: quartersToMonths
// Dependencies: [3400, 3578]
// Exports: default

// Module 3805 (quartersToMonths)
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
  return Math.floor(arg0 * require(3578) /* keys */.monthsInQuarter);
};
export default exports.default;
