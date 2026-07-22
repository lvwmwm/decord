// Module ID: 4496
// Function ID: 39665
// Name: ScreenContainer
// Dependencies: []
// Exports: default

// Module 4496 (ScreenContainer)
let Platform;
let closure_3 = ["codeBlock", "br"];
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
