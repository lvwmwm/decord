// Module ID: 3625
// Function ID: 27889
// Name: millisecondsToMinutes
// Dependencies: [3245, 3423]
// Exports: default

// Module 3625 (millisecondsToMinutes)
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
  return Math.floor(arg0 / require(3423) /* keys */.millisecondsInMinute);
};
export default exports.default;
