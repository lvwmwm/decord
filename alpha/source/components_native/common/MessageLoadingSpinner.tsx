// Module ID: 10007
// Function ID: 10008
// Name: MessageLoadingSpinner
// Dependencies: [19, 17, 21, 1378, 5481, 575, 6921, 2]
// Exports: default

// Module 10007 (MessageLoadingSpinner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken2 from "useToken" /* 5481 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const ActivityIndicator_ActivityIndicator = tmp(6921);
const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = requireNativeComponent("DCDMessageLoadingSpinner");
}
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let tmp9;
  const useToken = useToken2.useToken;
  color = color.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    const merged = Object.assign(color);
    tmp9 = <tmp4 color={color} />;
  } else {
    const ActivityIndicator = ActivityIndicator_ActivityIndicator.ActivityIndicator;
    const merged1 = Object.assign(color);
    tmp9 = <ActivityIndicator animating={arg0.animate} />;
  }
  return tmp9;
};
