// Module ID: 3806
// Function ID: 3807
// Name: yearsToQuarters
// Dependencies: [3364, 3542]
// Exports: default

// Module 3806 (yearsToQuarters)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function yearsToQuarters(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3542) /* keys */.quartersInYear);
};
export default exports.default;
