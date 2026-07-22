// Module ID: 3488
// Function ID: 26895
// Name: getWeek
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 3488 (getWeek)
_interopRequireDefault(require("__exportStarResult1"));
_interopRequireDefault(require("__exportStarResult1"));
_interopRequireDefault(require("__exportStarResult1"));
_interopRequireDefault(require("__exportStarResult1"));
let closure_4 = 604800000;

export default function getWeek(defaultResult1, defaultResult2) {
  __exportStarResult1.default(1, arguments);
  defaultResult1 = __exportStarResult1.default(defaultResult1);
  const time = __exportStarResult1.default(defaultResult1, defaultResult2).getTime();
  defaultResult2 = __exportStarResult1.default(defaultResult1, defaultResult2);
  return Math.round((time - __exportStarResult1.default(defaultResult1, defaultResult2).getTime()) / closure_4) + 1;
};
export default exports.default;
