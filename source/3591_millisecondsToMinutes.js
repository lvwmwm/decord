// Module ID: 3591
// Function ID: 27786
// Name: millisecondsToMinutes
// Dependencies: [3211, 3389]
// Exports: default

// Module 3591 (millisecondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function millisecondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.millisecondsInMinute);
};
export default exports.default;
