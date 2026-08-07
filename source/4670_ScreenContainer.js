// Module ID: 4670
// Function ID: 4671
// Name: ScreenContainer
// Dependencies: [109, 17, 19, 21, 4651, 4671]
// Exports: default

// Module 4670 (ScreenContainer)
import _objectWithoutProperties from "_objectWithoutProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import "noop";
import { jsx } from "jsxProd";

let Platform;
let c5;
const require = arg1;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: c5 } = get_ActivityIndicator);

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    let obj = require(4651) /* isNativePlatformSupported */;
    enabled = obj.screensEnabled();
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (require(4651) /* isNativePlatformSupported */.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        obj = {};
        const merged = Object.assign(tmp3);
        return jsx(importDefault(4671), {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(importDefault(4671), {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <closure_5 />;
};
