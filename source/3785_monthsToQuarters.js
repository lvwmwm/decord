// Module ID: 3785
// Function ID: 3786
// Name: monthsToQuarters
// Dependencies: [3400, 3578]
// Exports: default

// Module 3785 (monthsToQuarters)
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
  return Math.floor(arg0 / require(3578) /* keys */.monthsInQuarter);
};
export default exports.default;
