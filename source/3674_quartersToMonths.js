// Module ID: 3674
// Function ID: 3675
// Name: quartersToMonths
// Dependencies: [3269, 3447]
// Exports: default

// Module 3674 (quartersToMonths)
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
  return Math.floor(arg0 * require(3447) /* keys */.monthsInQuarter);
};
export default exports.default;
