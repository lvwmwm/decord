// Module ID: 3625
// Function ID: 27871
// Name: setHours
// Dependencies: []
// Exports: default

// Module 3625 (setHours)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function setHours(uTCHours, uTCMinutes, uTCSeconds, uTCMilliseconds) {
  closure_2.default(2, arguments);
  const defaultResult1 = closure_1.default(uTCHours);
  defaultResult1.setHours(closure_0.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;
