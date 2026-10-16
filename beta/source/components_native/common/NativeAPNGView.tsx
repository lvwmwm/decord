// Module ID: 9770
// Function ID: 9771
// Name: NativeAPNGView
// Dependencies: [17, 1382, 9771, 2]

// Module 9770 (NativeAPNGView)
import react_native from "react-native" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 9771 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
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
