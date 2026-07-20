// Module ID: 3419
// Function ID: 26643
// Name: startOfQuarter
// Dependencies: []
// Exports: default

// Module 3419 (startOfQuarter)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function startOfQuarter(defaultResult1) {
  closure_1.default(1, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;
