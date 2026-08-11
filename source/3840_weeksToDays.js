// Module ID: 3840
// Function ID: 3841
// Name: weeksToDays
// Dependencies: [3400, 3578]
// Exports: default

// Module 3840 (weeksToDays)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function weeksToDays(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3578) /* keys */.daysInWeek);
};
export default exports.default;
