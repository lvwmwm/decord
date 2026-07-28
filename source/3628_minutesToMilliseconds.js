// Module ID: 3628
// Function ID: 27895
// Name: minutesToMilliseconds
// Dependencies: [3245, 3423]
// Exports: default

// Module 3628 (minutesToMilliseconds)
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
  return Math.floor(arg0 * require(3423) /* keys */.millisecondsInMinute);
};
export default exports.default;
