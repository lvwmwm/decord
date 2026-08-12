// Module ID: 3826
// Function ID: 3827
// Name: monthsToQuarters
// Dependencies: [3441, 3619]
// Exports: default

// Module 3826 (monthsToQuarters)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function monthsToQuarters(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3619) /* keys */.monthsInQuarter);
};
export default exports.default;
