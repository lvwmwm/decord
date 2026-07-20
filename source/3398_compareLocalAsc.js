// Module ID: 3398
// Function ID: 26579
// Name: compareLocalAsc
// Dependencies: []
// Exports: default

// Module 3398 (compareLocalAsc)
function compareLocalAsc(defaultResult1, defaultResult2) {
  const fullYear = defaultResult1.getFullYear();
  let diff = fullYear - defaultResult2.getFullYear();
  if (!diff) {
    const month = defaultResult1.getMonth();
    diff = month - defaultResult2.getMonth();
  }
  if (!diff) {
    diff = defaultResult1.getDate() - defaultResult2.getDate();
    const date = defaultResult1.getDate();
  }
  if (!diff) {
    const hours = defaultResult1.getHours();
    diff = hours - defaultResult2.getHours();
  }
  if (!diff) {
    const minutes = defaultResult1.getMinutes();
    diff = minutes - defaultResult2.getMinutes();
  }
  if (!diff) {
    const seconds = defaultResult1.getSeconds();
    diff = seconds - defaultResult2.getSeconds();
  }
  if (!diff) {
    const milliseconds = defaultResult1.getMilliseconds();
    diff = milliseconds - defaultResult2.getMilliseconds();
  }
  let num = -1;
  if (diff >= 0) {
    let num2 = 1;
    if (diff <= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
}
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));

export default function differenceInDays(defaultResult1, defaultResult1) {
  closure_2.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const tmp3 = compareLocalAsc(defaultResult1, defaultResult2);
  const absolute = Math.abs(closure_1.default(defaultResult1, defaultResult2));
  defaultResult1.setDate(defaultResult1.getDate() - tmp3 * absolute);
  const result = tmp3 * (absolute - Number(compareLocalAsc(defaultResult1, defaultResult2) === -tmp3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;
