// Module ID: 3810
// Function ID: 3811
// Name: secondsToMinutes
// Dependencies: [3400, 3578]
// Exports: default

// Module 3810 (secondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3578) /* keys */.secondsInMinute);
};
export default exports.default;
