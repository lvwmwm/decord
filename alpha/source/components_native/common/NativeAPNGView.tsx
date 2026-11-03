// Module ID: 10413
// Function ID: 10414
// Name: NativeAPNGView
// Dependencies: [17, 1377, 10414, 2]

// Module 10413 (NativeAPNGView)
import react_native from "react-native" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 10414 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
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
