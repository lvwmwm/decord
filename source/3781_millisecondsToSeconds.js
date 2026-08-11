// Module ID: 3781
// Function ID: 3782
// Name: millisecondsToSeconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3781 (millisecondsToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3578) /* keys */.millisecondsInSecond);
};
export default exports.default;
