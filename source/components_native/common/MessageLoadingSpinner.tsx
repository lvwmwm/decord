// Module ID: 10582
// Function ID: 82602
// Name: result
// Dependencies: [31, 27, 33, 477, 3834, 689, 5586, 2]
// Exports: default

// Module 10582 (result)
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
  let obj = require(3834) /* map */;
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
    tmp8 = jsx(require(5586) /* ActivityIndicator */.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
};
