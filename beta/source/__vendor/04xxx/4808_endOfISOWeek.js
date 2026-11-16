// Module ID: 4808
// Function ID: 4809
// Name: endOfISOWeek
// Dependencies: [4809, 4586]
// Exports: default

// Module 4808 (endOfISOWeek)
import endOfWeek_mod from "endOfWeek" /* 4809 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

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
