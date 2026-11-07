// Module ID: 19498
// Function ID: 19499
// Name: BlurVisualEffectView
// Dependencies: [19, 17, 1072, 21, 5137, 575, 5724, 5728, 2]

// Module 19498 (BlurVisualEffectView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useToken from "useToken" /* 5724 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5728 */;
import react from "react" /* 19 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const memoResult = react.memo(function BlurVisualEffectView() {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
