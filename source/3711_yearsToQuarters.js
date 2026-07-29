// Module ID: 3711
// Function ID: 3712
// Name: yearsToQuarters
// Dependencies: [3269, 3447]
// Exports: default

// Module 3711 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3447) /* keys */.quartersInYear);
};
export default exports.default;
