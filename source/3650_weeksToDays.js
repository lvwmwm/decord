// Module ID: 3650
// Function ID: 27950
// Name: weeksToDays
// Dependencies: [3210, 3388]
// Exports: default

// Module 3650 (weeksToDays)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function weeksToDays(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3388) /* keys */.daysInWeek);
};
export default exports.default;
