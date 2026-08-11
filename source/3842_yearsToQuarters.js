// Module ID: 3842
// Function ID: 3843
// Name: yearsToQuarters
// Dependencies: [3400, 3578]
// Exports: default

// Module 3842 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3578) /* keys */.quartersInYear);
};
export default exports.default;
