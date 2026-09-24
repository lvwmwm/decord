// Module ID: 17615
// Function ID: 17616
// Name: VoicePanelVisualEffectView
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 4494, 9214, 2]

// Module 17615 (VoicePanelVisualEffectView)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4494 */;
import native from "native" /* 9214 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let obj = { wrapper: null, border: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.wrapper = {};
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderWidth = 1;
obj4.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj4.borderRadius = nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj.border = obj4;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((matchAppTheme) => {
  const cResult = c.c(9);
  matchAppTheme = matchAppTheme.matchAppTheme;
  let token = useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmpResult = useToken;
  if (undefined !== matchAppTheme && matchAppTheme) {
    token = tmpResult2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp6 = closure_6();
  if (cResult[0] === "dark") {
    if (cResult[1] === token) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp6.border) {
      const obj2 = { style: tmp6.border };
      const tmp12 = React4(React3, obj2);
      cResult[3] = tmp6.border;
      cResult[4] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === tmp6.wrapper) {
        if (cResult[7] === tmp9) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj3 = { style: tmp6.wrapper, children: null };
    const items = [tmp7, tmp9];
    obj3.children = items;
    const tmp16 = hasOwnProperty(React3, obj3);
    cResult[5] = tmp7;
    cResult[6] = tmp6.wrapper;
    cResult[7] = tmp9;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const tmp8 = React4(native.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token });
  cResult[0] = "dark";
  cResult[1] = token;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((matchAppTheme) => {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let token = useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  if (flag) {
    token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp4 = closure_6();
  const obj3 = { style: tmp4.wrapper, children: null };
  const items = [React4(native.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), React4(React3, { style: tmp4.border })];
  obj3.children = items;
  return hasOwnProperty(React3, obj3);
}));
