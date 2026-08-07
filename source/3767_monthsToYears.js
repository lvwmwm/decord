// Module ID: 3767
// Function ID: 3768
// Name: monthsToYears
// Dependencies: [3381, 3559]
// Exports: default

// Module 3767 (monthsToYears)
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
  return Math.floor(arg0 / require(3559) /* keys */.monthsInYear);
};
export default exports.default;
