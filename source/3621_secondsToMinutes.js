// Module ID: 3621
// Function ID: 27872
// Name: secondsToMinutes
// Dependencies: [3211, 3389]
// Exports: default

// Module 3621 (secondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function secondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.secondsInMinute);
};
export default exports.default;
