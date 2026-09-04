// Module ID: 9542
// Function ID: 9543
// Name: result
// Dependencies: [19, 17, 21, 1234, 4197, 709, 5532, 2]
// Exports: default

// Module 9542 (result)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import ActivityIndicator from "ActivityIndicator" /* 5532 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1234 */;

require = arg1;
noopAll;
let result = null;
if (!set.isAndroid()) {
  result = require("get ActivityIndicator").requireNativeComponent("DCDMessageLoadingSpinner");
}
let c4 = result;
const result1 = set.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = map;
  color = color.color;
  if (color == null) {
    color = obj.useToken(ThemesDefault.colors.BACKGROUND_BRAND);
  }
  if (null != closure_4) {
    obj = {};
    const merged = Object.assign(color);
    obj.color = color;
    let tmp8 = <tmp3 />;
  } else {
    obj = { animating: null };
    obj[0] = color.animate;
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator.ActivityIndicator, { animating: null });
  }
  return tmp8;
};
