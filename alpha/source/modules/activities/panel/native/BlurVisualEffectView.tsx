// Module ID: 17488
// Function ID: 17489
// Name: BlurVisualEffectView
// Dependencies: [19, 17, 1085, 21, 4927, 587, 558, 576, 4778, 5363, 2]

// Module 17488 (BlurVisualEffectView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useToken from "useToken" /* 4778 */;
import react from "react" /* 19 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3;
const VisualEffectViewDefault = tmp3(5363);
const StyleSheet = react_native.StyleSheet;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BlurVisualEffectView() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  if (cResult[0] !== token) {
    const tmp9 = jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
    cResult[0] = token;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function BlurVisualEffectView() {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
