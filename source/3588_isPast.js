// Module ID: 3588
// Function ID: 27779
// Name: isPast
// Dependencies: [3244, 3245]
// Exports: default

// Module 3588 (isPast)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isPast(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time < Date.now();
};
export default exports.default;
