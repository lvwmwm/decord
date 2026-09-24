// Module ID: 4039
// Function ID: 4040
// Name: startOfISOWeek
// Dependencies: [4040, 3882]
// Exports: default

// Module 4039 (startOfISOWeek)
import startOfWeek_mod from "startOfWeek" /* 4040 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function startOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
