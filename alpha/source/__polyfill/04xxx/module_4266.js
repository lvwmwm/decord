// Module ID: 4266
// Function ID: 4267
// Dependencies: [4267, 3914]
// Exports: default

// Module 4266
import startOfSecond_mod from "startOfSecond" /* 4267 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let startOfSecond = startOfSecond_mod;
if (!startOfSecond) {
  const obj = { default: startOfSecond };
  let tmp3 = obj;
} else {
  tmp3 = startOfSecond;
}
startOfSecond = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameSecond(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfSecond.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfSecond.default(arg1).getTime();
};
export default exports.default;
