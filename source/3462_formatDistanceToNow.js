// Module ID: 3462
// Function ID: 26823
// Name: formatDistanceToNow
// Dependencies: [3458, 3211]
// Exports: default

// Module 3462 (formatDistanceToNow)
import formatDistance from "formatDistance";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNow(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistance.default(defaultResult1, Date.now(), date);
};
export default exports.default;
