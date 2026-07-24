// Module ID: 3498
// Function ID: 26924
// Name: hoursToMinutes
// Dependencies: [3210, 3388]
// Exports: default

// Module 3498 (hoursToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function hoursToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3388) /* keys */.minutesInHour);
};
export default exports.default;
