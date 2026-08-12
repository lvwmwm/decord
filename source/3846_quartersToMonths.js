// Module ID: 3846
// Function ID: 3847
// Name: quartersToMonths
// Dependencies: [3441, 3619]
// Exports: default

// Module 3846 (quartersToMonths)
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
  return Math.floor(arg0 * require(3619) /* keys */.monthsInQuarter);
};
export default exports.default;
