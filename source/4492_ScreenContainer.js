// Module ID: 4492
// Function ID: 39601
// Name: ScreenContainer
// Dependencies: []
// Exports: default

// Module 4492 (ScreenContainer)
let Platform;
let closure_3 = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002286012983676589, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013453786808352587];
let closure_4 = importDefault(dependencyMap[0]);
({ Platform, View: closure_5 } = arg1(dependencyMap[1]));
importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    enabled = arg1(dependencyMap[4]).screensEnabled();
    const obj = arg1(dependencyMap[4]);
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (arg1(dependencyMap[4]).isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const _Object2 = Object;
        return jsx(importDefault(dependencyMap[5]), Object.assign({}, tmp3));
      } else {
        const _Object = Object;
        return jsx(importDefault(dependencyMap[5]), Object.assign({}, tmp3));
      }
    }
  }
  return <closure_5 {...Object.assign({}, tmp3)} />;
};
