// Module ID: 4535
// Function ID: 39824
// Name: ScreenContainer
// Dependencies: [29, 27, 31, 33, 4516, 4536]
// Exports: default

// Module 4535 (ScreenContainer)
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
    enabled = require(4516) /* isNativePlatformSupported */.screensEnabled();
    const obj = require(4516) /* isNativePlatformSupported */;
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (require(4516) /* isNativePlatformSupported */.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const _Object2 = Object;
        return jsx(importDefault(4536), Object.assign({}, tmp3));
      } else {
        const _Object = Object;
        return jsx(importDefault(4536), Object.assign({}, tmp3));
      }
    }
  }
  return <closure_5 {...Object.assign({}, tmp3)} />;
};
