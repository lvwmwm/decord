// Module ID: 3721
// Function ID: 3722
// Name: monthsToYears
// Dependencies: [3335, 3513]
// Exports: default

// Module 3721 (monthsToYears)
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
  return Math.floor(arg0 / require(3513) /* keys */.monthsInYear);
};
export default exports.default;
