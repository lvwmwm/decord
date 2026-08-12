// Module ID: 9896
// Function ID: 9897
// Dependencies: [17, 500, 9897, 2]

// Module 9896
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = require("get ActivityIndicator").requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
