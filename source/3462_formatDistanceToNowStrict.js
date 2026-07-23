// Module ID: 3462
// Function ID: 26814
// Name: formatDistanceToNowStrict
// Dependencies: [3460, 3210]
// Exports: default

// Module 3462 (formatDistanceToNowStrict)
import formatDistanceStrict from "formatDistanceStrict";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNowStrict(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistanceStrict.default(defaultResult1, Date.now(), date);
};
export default exports.default;
