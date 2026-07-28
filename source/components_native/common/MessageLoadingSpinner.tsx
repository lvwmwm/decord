// Module ID: 10538
// Function ID: 81535
// Name: result
// Dependencies: [31, 27, 33, 477, 3869, 689, 5619, 2]
// Exports: default

// Module 10538 (result)
import "result";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

const require = arg1;
let result = null;
if (!set.isAndroid()) {
  result = require("get ActivityIndicator").requireNativeComponent("DCDMessageLoadingSpinner");
}
const result1 = set.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = require(3869) /* map */;
  let token = obj.useToken(importDefault(689).colors.BACKGROUND_BRAND);
  color = color.color;
  if (null != color) {
    token = color;
  }
  if (null != closure_4) {
    obj = {};
    const merged = Object.assign(color);
    obj["color"] = token;
    let tmp8 = <closure_4 />;
  } else {
    obj = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(require(5619) /* ActivityIndicator */.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
};
