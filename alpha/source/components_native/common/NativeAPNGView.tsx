// Module ID: 9838
// Function ID: 9839
// Name: NativeAPNGView
// Dependencies: [17, 1364, 9839, 2]

// Module 9838 (NativeAPNGView)
import _mod17 from "module_17" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 9839 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
