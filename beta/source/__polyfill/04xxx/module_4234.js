// Module ID: 4234
// Function ID: 4235
// Dependencies: [4235, 3882]
// Exports: default

// Module 4234
import startOfSecond_mod from "startOfSecond" /* 4235 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

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
