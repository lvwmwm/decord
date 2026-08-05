// Module ID: 10582
// Function ID: 10583
// Name: result
// Dependencies: [19, 17, 21, 500, 3959, 712, 5717, 2]
// Exports: default

// Module 10582 (result)
import "noop";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

const require = arg1;
let result = null;
if (!set.isAndroid()) {
  result = require("get ActivityIndicator").requireNativeComponent("DCDMessageLoadingSpinner");
}
let c4 = result;
const result1 = set.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = require(3959) /* map */;
  color = color.color;
  if (color == null) {
    color = obj.useToken(importDefault(712).colors.BACKGROUND_BRAND);
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
    tmp8 = jsx(require(5717) /* ActivityIndicator */.ActivityIndicator, { animating: null });
  }
  return tmp8;
};
