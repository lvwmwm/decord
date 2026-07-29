// Module ID: 3654
// Function ID: 3655
// Name: monthsToQuarters
// Dependencies: [3269, 3447]
// Exports: default

// Module 3654 (monthsToQuarters)
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
  return Math.floor(arg0 / require(3447) /* keys */.monthsInQuarter);
};
export default exports.default;
