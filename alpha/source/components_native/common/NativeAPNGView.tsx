// Module ID: 10099
// Function ID: 10100
// Name: NativeAPNGView
// Dependencies: [17, 1384, 10100, 2]

// Module 10099 (NativeAPNGView)
import react_native from "react-native" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 10100 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let _default;
const requireNativeComponent = react_native.requireNativeComponent;
if (PlatformUtils.isAndroid()) {
  _default = APNGStickerNativeComponent.default;
} else {
  _default = requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
