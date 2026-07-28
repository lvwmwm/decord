// Module ID: 3496
// Function ID: 26926
// Name: formatDistanceToNow
// Dependencies: [3492, 3245]
// Exports: default

// Module 3496 (formatDistanceToNow)
import formatDistance from "formatDistance";
import requiredArgs from "requiredArgs";


export default function formatDistanceToNow(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return formatDistance.default(defaultResult1, Date.now(), date);
};
export default exports.default;
