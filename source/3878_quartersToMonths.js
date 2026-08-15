// Module ID: 3878
// Function ID: 3879
// Name: quartersToMonths
// Dependencies: [3473, 3651]
// Exports: default

// Module 3878 (quartersToMonths)
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
  return Math.floor(arg0 * require(3651) /* keys */.monthsInQuarter);
};
export default exports.default;
