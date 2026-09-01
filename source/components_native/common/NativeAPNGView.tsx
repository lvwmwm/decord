// Module ID: 10262
// Function ID: 10263
// Dependencies: [17, 500, 10263, 2]

// Module 10262
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 10263 */;
import set from "set" /* 500 */;

if (set.isAndroid()) {
  let _default = __INTERNAL_VIEW_CONFIG.default;
} else {
  _default = get_ActivityIndicator.requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
