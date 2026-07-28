// Module ID: 3497
// Function ID: 26929
// Name: formatDistanceToNowStrict
// Dependencies: [3495, 3245]
// Exports: default

// Module 3497 (formatDistanceToNowStrict)
import formatDistanceStrict from "formatDistanceStrict";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNowStrict(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistanceStrict.default(defaultResult1, Date.now(), date);
};
export default exports.default;
