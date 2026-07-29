// Module ID: 3655
// Function ID: 3656
// Name: monthsToYears
// Dependencies: [3269, 3447]
// Exports: default

// Module 3655 (monthsToYears)
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
  return Math.floor(arg0 / require(3447) /* keys */.monthsInYear);
};
export default exports.default;
