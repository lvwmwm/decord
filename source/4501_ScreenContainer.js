// Module ID: 4501
// Function ID: 39709
// Name: ScreenContainer
// Dependencies: [29, 27, 31, 33, 4482, 4502]
// Exports: default

// Module 4501 (ScreenContainer)
import _objectWithoutProperties from "_objectWithoutProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import "result";
import { jsx } from "jsxProd";

let Platform;
let closure_5;
const require = arg1;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: closure_5 } = get_ActivityIndicator);

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    enabled = require(4482) /* isNativePlatformSupported */.screensEnabled();
    const obj = require(4482) /* isNativePlatformSupported */;
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (require(4482) /* isNativePlatformSupported */.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const _Object2 = Object;
        return jsx(importDefault(4502), Object.assign({}, tmp3));
      } else {
        const _Object = Object;
        return jsx(importDefault(4502), Object.assign({}, tmp3));
      }
    }
  }
  return <closure_5 {...Object.assign({}, tmp3)} />;
};
