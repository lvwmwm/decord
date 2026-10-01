// Module ID: 17005
// Function ID: 17006
// Name: VoicePanelVisualEffectView
// Dependencies: [19, 17, 21, 4836, 576, 4531, 8370, 2]

// Module 17005 (VoicePanelVisualEffectView)
import nativeDefault from "native" /* 576 */;
import useToken2 from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp;
const native = tmp(8370);
({ StyleSheet, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, border: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
const memoResult = react.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let items;
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useToken2;
  let token = obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  const useToken = useToken2.useToken;
  useToken2;
  if (flag) {
    token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp5 = closure_6();
  const obj2 = { style: tmp5.wrapper, children: items };
  items = [React3(native.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), ];
  const obj3 = { style: tmp5.border };
  items[1] = React3(_false, obj3);
  return hasOwnProperty(_false, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
