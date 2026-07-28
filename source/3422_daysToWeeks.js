// Module ID: 3422
// Function ID: 26666
// Name: daysToWeeks
// Dependencies: [3245, 3423]
// Exports: default

// Module 3422 (daysToWeeks)
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
  return Math.floor(arg0 / require(3423) /* keys */.daysInWeek);
};
export default exports.default;
