// Module ID: 3915
// Function ID: 3916
// Name: yearsToQuarters
// Dependencies: [3473, 3651]
// Exports: default

// Module 3915 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3651) /* keys */.quartersInYear);
};
export default exports.default;
