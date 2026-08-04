// Module ID: 3750
// Function ID: 3751
// Name: monthsToQuarters
// Dependencies: [3365, 3543]
// Exports: default

// Module 3750 (monthsToQuarters)
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
  return Math.floor(arg0 / require(3543) /* keys */.monthsInQuarter);
};
export default exports.default;
