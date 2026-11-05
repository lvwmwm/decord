// Module ID: 4676
// Function ID: 4677
// Name: formatDistanceToNowStrict
// Dependencies: [4674, 4424]
// Exports: default

// Module 4676 (formatDistanceToNowStrict)
import formatDistanceStrict_mod from "formatDistanceStrict" /* 4674 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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
