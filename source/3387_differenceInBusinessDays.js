// Module ID: 3387
// Function ID: 26544
// Name: differenceInBusinessDays
// Dependencies: []
// Exports: default

// Module 3387 (differenceInBusinessDays)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));
let closure_5 = _interopRequireDefault(require(dependencyMap[5]));
let closure_6 = _interopRequireDefault(require(dependencyMap[6]));
let closure_7 = _interopRequireDefault(require(dependencyMap[7]));

export default function differenceInBusinessDays(defaultResult1, defaultResult1) {
  let defaultResult6;
  closure_6.default(2, arguments);
  defaultResult1 = closure_5.default(defaultResult1);
  const defaultResult2 = closure_5.default(defaultResult1);
  if (closure_3.default(defaultResult1)) {
    if (closure_3.default(defaultResult2)) {
      const defaultResult3 = closure_1.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = closure_7.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      const defaultResult5 = closure_0.default(defaultResult2, 7 * defaultResult4);
      let tmp13 = defaultResult5;
      let sum = result;
      let tmp15 = result;
      if (!closure_2.default(defaultResult1, defaultResult5)) {
        do {
          let tmp16 = closure_4;
          let tmp17 = tmp13;
          let num5 = 0;
          if (!closure_4.default(tmp13)) {
            num5 = num2;
          }
          sum = sum + num5;
          let tmp18 = closure_0;
          defaultResult6 = closure_0.default(tmp13, num2);
          let tmp20 = closure_2;
          tmp13 = defaultResult6;
          tmp15 = sum;
        } while (!closure_2.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp15) {
        num6 = tmp15;
      }
      return num6;
    }
  }
  return NaN;
};
export default exports.default;
