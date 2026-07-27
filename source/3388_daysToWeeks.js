// Module ID: 3388
// Function ID: 26564
// Name: daysToWeeks
// Dependencies: [3211, 3389]
// Exports: default

// Module 3388 (daysToWeeks)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function daysToWeeks(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.daysInWeek);
};
export default exports.default;
