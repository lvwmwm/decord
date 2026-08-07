// Module ID: 3823
// Function ID: 3824
// Name: yearsToQuarters
// Dependencies: [3381, 3559]
// Exports: default

// Module 3823 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3559) /* keys */.quartersInYear);
};
export default exports.default;
