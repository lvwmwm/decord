// Module ID: 3786
// Function ID: 3787
// Name: monthsToYears
// Dependencies: [3400, 3578]
// Exports: default

// Module 3786 (monthsToYears)
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
  return Math.floor(arg0 / require(3578) /* keys */.monthsInYear);
};
export default exports.default;
