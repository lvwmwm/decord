// Module ID: 3593
// Function ID: 27780
// Name: minutesToMilliseconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3593 (minutesToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function minutesToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3388) /* keys */.millisecondsInMinute);
};
export default exports.default;
