// Module ID: 3378
// Function ID: 26515
// Name: clamp
// Dependencies: []
// Exports: default

// Module 3378 (clamp)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function clamp(arg0, arg1) {
  let end;
  let start;
  ({ start, end } = arg1);
  closure_2.default(2, arguments);
  const items = [arg0, start];
  const items1 = [closure_0.default(items), end];
  return closure_1.default(items1);
};
export default exports.default;
