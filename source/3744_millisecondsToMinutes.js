// Module ID: 3744
// Function ID: 3745
// Name: millisecondsToMinutes
// Dependencies: [3364, 3542]
// Exports: default

// Module 3744 (millisecondsToMinutes)
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
  return Math.floor(arg0 / require(3542) /* keys */.millisecondsInMinute);
};
export default exports.default;
