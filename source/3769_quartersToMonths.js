// Module ID: 3769
// Function ID: 3770
// Name: quartersToMonths
// Dependencies: [3364, 3542]
// Exports: default

// Module 3769 (quartersToMonths)
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
  return Math.floor(arg0 * require(3542) /* keys */.monthsInQuarter);
};
export default exports.default;
