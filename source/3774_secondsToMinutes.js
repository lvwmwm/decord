// Module ID: 3774
// Function ID: 3775
// Name: secondsToMinutes
// Dependencies: [3364, 3542]
// Exports: default

// Module 3774 (secondsToMinutes)
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
  return Math.floor(arg0 / require(3542) /* keys */.secondsInMinute);
};
export default exports.default;
