// Module ID: 3859
// Function ID: 3860
// Name: monthsToYears
// Dependencies: [3473, 3651]
// Exports: default

// Module 3859 (monthsToYears)
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
  return Math.floor(arg0 / require(3651) /* keys */.monthsInYear);
};
export default exports.default;
