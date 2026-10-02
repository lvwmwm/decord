// Module ID: 16964
// Function ID: 16965
// Name: VoicePanelVisualEffectView
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 4535, 8367, 2]

// Module 16964 (VoicePanelVisualEffectView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import useToken2 from "useToken" /* 4535 */;
import native from "native" /* 8367 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let matchAppTheme;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((matchAppTheme) => {
  let items;
  const obj = react2;
  const cResult = obj.c(9);
  matchAppTheme = matchAppTheme.matchAppTheme;
  const tmpResult = useToken2;
  let token = tmpResult.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  const useToken = useToken2.useToken;
  useToken2;
  if (undefined !== matchAppTheme && matchAppTheme) {
    token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp7 = closure_6();
  if (cResult[0] === "dark") {
    let tmp8;
    let tmp10;
    if (cResult[1] === token) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp7.border) {
      const obj2 = { style: tmp7.border };
      const tmp13 = React3(_false, obj2);
      cResult[3] = tmp7.border;
      cResult[4] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp7.wrapper) {
        let tmp14;
        if (cResult[7] === tmp10) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
    }
    const obj3 = { style: tmp7.wrapper, children: items };
    items = [tmp8, tmp10];
    const tmp17 = hasOwnProperty(_false, obj3);
    cResult[5] = tmp8;
    cResult[6] = tmp7.wrapper;
    cResult[7] = tmp10;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
  const tmp9 = React3(native.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token });
  cResult[0] = "dark";
  cResult[1] = token;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : ((matchAppTheme) => {
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
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
