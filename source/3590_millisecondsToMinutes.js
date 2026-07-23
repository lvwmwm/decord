// Module ID: 3590
// Function ID: 27774
// Name: millisecondsToMinutes
// Dependencies: [3210, 3388]
// Exports: default

// Module 3590 (millisecondsToMinutes)
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
  return Math.floor(arg0 / require(3388) /* keys */.millisecondsInMinute);
};
export default exports.default;
