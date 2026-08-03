// Module ID: 9795
// Function ID: 9796
// Dependencies: [17, 500, 9796, 2]

// Module 9795
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = require("get ActivityIndicator").requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
