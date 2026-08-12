// Module ID: 3827
// Function ID: 3828
// Name: monthsToYears
// Dependencies: [3441, 3619]
// Exports: default

// Module 3827 (monthsToYears)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function monthsToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3619) /* keys */.monthsInYear);
};
export default exports.default;
