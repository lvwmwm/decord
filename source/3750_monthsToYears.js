// Module ID: 3750
// Function ID: 3751
// Name: monthsToYears
// Dependencies: [3364, 3542]
// Exports: default

// Module 3750 (monthsToYears)
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
  return Math.floor(arg0 / require(3542) /* keys */.monthsInYear);
};
export default exports.default;
