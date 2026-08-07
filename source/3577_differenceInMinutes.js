// Module ID: 3577
// Function ID: 3578
// Name: differenceInMinutes
// Dependencies: [3573, 3381, 3559, 3574]
// Exports: default

// Module 3577 (differenceInMinutes)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";

if (!differenceInMilliseconds) {
  let obj = { default: null };
  obj[0] = differenceInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / require(3559) /* keys */.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3574) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
