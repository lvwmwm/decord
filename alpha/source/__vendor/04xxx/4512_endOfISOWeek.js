// Module ID: 4512
// Function ID: 4513
// Name: endOfISOWeek
// Dependencies: [4513, 4290]
// Exports: default

// Module 4512 (endOfISOWeek)
import endOfWeek_mod from "endOfWeek" /* 4513 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
