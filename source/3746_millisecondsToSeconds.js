// Module ID: 3746
// Function ID: 3747
// Name: millisecondsToSeconds
// Dependencies: [3365, 3543]
// Exports: default

// Module 3746 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3543) /* keys */.millisecondsInSecond);
};
export default exports.default;
