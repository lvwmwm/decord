// Module ID: 3821
// Function ID: 3822
// Name: weeksToDays
// Dependencies: [3381, 3559]
// Exports: default

// Module 3821 (weeksToDays)
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
  return Math.floor(arg0 * require(3559) /* keys */.daysInWeek);
};
export default exports.default;
