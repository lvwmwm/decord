// Module ID: 3780
// Function ID: 3781
// Name: millisecondsToMinutes
// Dependencies: [3400, 3578]
// Exports: default

// Module 3780 (millisecondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3578) /* keys */.millisecondsInMinute);
};
export default exports.default;
