// Module ID: 4509
// Function ID: 4510
// Name: endOfISOWeek
// Dependencies: [4510, 4287]
// Exports: default

// Module 4509 (endOfISOWeek)
import endOfWeek_mod from "endOfWeek" /* 4510 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;

let tmp3;
let tmp5;
let endOfWeek = endOfWeek_mod;
if (!endOfWeek) {
  tmp3 = { default: endOfWeek };
  const obj = { default: endOfWeek };
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
