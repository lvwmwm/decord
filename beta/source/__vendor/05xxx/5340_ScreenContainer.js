// Module ID: 5340
// Function ID: 5341
// Name: ScreenContainer
// Dependencies: [109, 17, 19, 21, 5323, 5341]
// Exports: default

// Module 5340 (ScreenContainer)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5323 */;
import react_nativeDefault from "react-native" /* 5341 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native2 from "react-native" /* 17 */;
import react from "react" /* 19 */;

let Platform;
let hasOwnProperty;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: hasOwnProperty } = react_native2);
const jsx = Fragment.jsx;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    const obj = react_native;
    enabled = obj.screensEnabled();
  }
  const hasTwoStates = enabled.hasTwoStates;
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (react_native.isNativePlatformSupported) {
      if (hasTwoStates) {
        react_nativeDefault;
        const merged = Object.assign(tmp3);
        return <tmp14 />;
      } else {
        react_nativeDefault;
        const merged1 = Object.assign(tmp3);
        return <tmp9 />;
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
};
