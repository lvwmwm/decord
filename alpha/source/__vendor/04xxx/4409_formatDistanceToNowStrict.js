// Module ID: 4409
// Function ID: 4410
// Name: formatDistanceToNowStrict
// Dependencies: [4407, 4157]
// Exports: default

// Module 4409 (formatDistanceToNowStrict)
import formatDistanceStrict_mod from "formatDistanceStrict" /* 4407 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let formatDistanceStrict = formatDistanceStrict_mod;
if (!formatDistanceStrict) {
  tmp3 = { default: formatDistanceStrict };
  const obj = { default: formatDistanceStrict };
} else {
  tmp3 = formatDistanceStrict;
}
formatDistanceStrict = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return formatDistanceStrict.default(arg0, Date.now(), arg1);
};
