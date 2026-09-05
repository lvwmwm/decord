// Module ID: 10177
// Function ID: 10178
// Dependencies: [17, 1115, 10178, 2]

// Module 10177
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 10178 */;
import set from "set" /* 1115 */;

if (set.isAndroid()) {
  let _default = __INTERNAL_VIEW_CONFIG.default;
} else {
  _default = get_ActivityIndicator.requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
