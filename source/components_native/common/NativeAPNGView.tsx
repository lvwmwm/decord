// Module ID: 9648
// Function ID: 9649
// Dependencies: [17, 500, 9649, 2]

// Module 9648
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = require("get ActivityIndicator").requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
