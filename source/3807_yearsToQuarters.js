// Module ID: 3807
// Function ID: 3808
// Name: yearsToQuarters
// Dependencies: [3365, 3543]
// Exports: default

// Module 3807 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3543) /* keys */.quartersInYear);
};
export default exports.default;
