// Module ID: 3913
// Function ID: 3914
// Name: weeksToDays
// Dependencies: [3473, 3651]
// Exports: default

// Module 3913 (weeksToDays)
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
  return Math.floor(arg0 * require(3651) /* keys */.daysInWeek);
};
export default exports.default;
