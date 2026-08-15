// Module ID: 3858
// Function ID: 3859
// Name: monthsToQuarters
// Dependencies: [3473, 3651]
// Exports: default

// Module 3858 (monthsToQuarters)
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
  return Math.floor(arg0 / require(3651) /* keys */.monthsInQuarter);
};
export default exports.default;
