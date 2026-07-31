// Module ID: 3659
// Function ID: 3660
// Name: monthsToYears
// Dependencies: [3273, 3451]
// Exports: default

// Module 3659 (monthsToYears)
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
  return Math.floor(arg0 / require(3451) /* keys */.monthsInYear);
};
export default exports.default;
