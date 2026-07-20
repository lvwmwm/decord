// Module ID: 3535
// Function ID: 27375
// Name: setUTCISODay
// Dependencies: []
// Exports: default

// Module 3535 (setUTCISODay)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function setUTCISODay(defaultResult1, defaultResult1) {
  closure_1.default(2, arguments);
  defaultResult1 = closure_2.default(defaultResult1);
  let diff = defaultResult1;
  if (defaultResult1 % 7 === 0) {
    diff = defaultResult1 - 7;
  }
  const defaultResult2 = closure_0.default(defaultResult1);
  let num = 0;
  const uTCDay = defaultResult2.getUTCDay();
  if ((diff % 7 + 7) % 7 < 1) {
    num = 7;
  }
  const diff1 = num + diff - uTCDay;
  defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff1);
  return defaultResult2;
};
export default exports.default;
