// Module ID: 3786
// Function ID: 3787
// Name: quartersToMonths
// Dependencies: [3381, 3559]
// Exports: default

// Module 3786 (quartersToMonths)
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
  return Math.floor(arg0 * require(3559) /* keys */.monthsInQuarter);
};
export default exports.default;
