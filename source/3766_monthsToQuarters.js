// Module ID: 3766
// Function ID: 3767
// Name: monthsToQuarters
// Dependencies: [3381, 3559]
// Exports: default

// Module 3766 (monthsToQuarters)
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
  return Math.floor(arg0 / require(3559) /* keys */.monthsInQuarter);
};
export default exports.default;
