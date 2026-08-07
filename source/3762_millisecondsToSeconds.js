// Module ID: 3762
// Function ID: 3763
// Name: millisecondsToSeconds
// Dependencies: [3381, 3559]
// Exports: default

// Module 3762 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3559) /* keys */.millisecondsInSecond);
};
export default exports.default;
