// Module ID: 3751
// Function ID: 3752
// Name: monthsToYears
// Dependencies: [3365, 3543]
// Exports: default

// Module 3751 (monthsToYears)
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
  return Math.floor(arg0 / require(3543) /* keys */.monthsInYear);
};
export default exports.default;
