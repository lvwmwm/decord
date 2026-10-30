// Module ID: 19244
// Function ID: 19245
// Name: VoicePanelVisualEffectView
// Dependencies: [19, 17, 1193, 21, 5009, 575, 5591, 504, 5016, 1376, 8983, 2]

// Module 19244 (VoicePanelVisualEffectView)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ DynamicColorIOS: closure_4, StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, border: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const memoResult = react.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let items2;
  let items3;
  let theme;
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let token1;
  let tmp = flag;
  let obj = flag(token1[6]);
  let token = obj.useToken(stateFromStores(token1[5]).colors.THEME_LOCKED_BLUR_FALLBACK);
  const useToken = flag(token1[6]).useToken;
  const tmp3 = stateFromStores;
  const tmp5 = flag(token1[6]);
  if (flag) {
    token = useToken(stateFromStores(token1[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp6 = closure_9();
  const items = [ThemeStore];
  const tmpResult = tmp(token1[7]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    const obj = flag(token1[8]);
    return obj.isThemeLight(theme.theme);
  });
  const tmpResult2 = tmp(token1[6]);
  token1 = tmpResult2.useToken(tmp3(tmp2[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  const items1 = [stateFromStores, token1, flag];
  const memo = react.useMemo(() => {
    let tmp;
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      if (stateFromStores) {
        if (!flag) {
          const obj2 = { light: "transparent", dark: "transparent", highContrastLight: token1, highContrastDark: token1 };
          tmp = React3(obj2);
        }
      }
    }
    return tmp;
  }, items1);
  let obj2 = { style: tmp6.wrapper, children: items2 };
  items2 = [closure_7(tmp(tmp2[10]).BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), ];
  const obj3 = { style: items3 };
  items3 = [tmp6.border, { backgroundColor: memo }];
  items2[1] = closure_7(closure_5, obj3);
  return closure_8(closure_5, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
