// Module ID: 10731
// Function ID: 10732
// Name: NativeAPNGView
// Dependencies: [17, 1368, 10732, 2]

// Module 10731 (NativeAPNGView)
import _mod17 from "module_17" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 10732 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
