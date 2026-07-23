// Module ID: 3461
// Function ID: 26811
// Name: formatDistanceToNow
// Dependencies: [3457, 3210]
// Exports: default

// Module 3461 (formatDistanceToNow)
import formatDistance from "formatDistance";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNow(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistance.default(defaultResult1, Date.now(), date);
};
export default exports.default;
