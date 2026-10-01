// Module ID: 16849
// Function ID: 16850
// Name: BlurVisualEffectView
// Dependencies: [19, 17, 1074, 21, 4683, 576, 4531, 5269, 2]

// Module 16849 (BlurVisualEffectView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useToken from "useToken" /* 4531 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import react from "react" /* 19 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const memoResult = react.memo(() => {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
