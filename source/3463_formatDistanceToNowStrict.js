// Module ID: 3463
// Function ID: 26827
// Name: formatDistanceToNowStrict
// Dependencies: [3461, 3211]
// Exports: default

// Module 3463 (formatDistanceToNowStrict)
import formatDistanceStrict from "formatDistanceStrict";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNowStrict(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistanceStrict.default(defaultResult1, Date.now(), date);
};
export default exports.default;
