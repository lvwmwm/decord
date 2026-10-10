// Module ID: 11798
// Function ID: 11799
// Name: NoPermsState
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 4969, 5031, 11799, 11800, 11727, 10622, 6156, 1126, 5088, 2]

// Module 11798 (NoPermsState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11727 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
obj2 = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState() {
  let items;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_6();
  const obj2 = shared;
  const tmp5Result = importDefault(obj2.isThemeLight(useThemeDefault()) ? 11799 : 11800);
  const tmpResult = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = tmpResult.useLogAppLauncherEmptyStateView(tmp(10622).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  if (cResult[0] === tmp5Result) {
    let tmp9;
    let tmp12;
    let tmp14;
    if (cResult[1] === tmp4.image) {
      tmp9 = cResult[2];
    }
    const _Symbol = Symbol;
    const textContainer = tmp4.textContainer;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl2.t.uDnXXj);
      cResult[3] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] !== tmp4.textContainer) {
      const obj3 = { style: textContainer, variant: "text-sm/medium", color: "text-muted", children: tmp12 };
      const tmp16 = React3(Text_Text.Text, obj3);
      cResult[4] = tmp4.textContainer;
      cResult[5] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.container) {
      if (cResult[7] === tmp9) {
        let tmp17;
        if (cResult[8] === tmp14) {
          tmp17 = cResult[9];
        }
        return tmp17;
      }
    }
    const obj4 = { style: tmp8, children: items };
    items = [tmp9, tmp14];
    const tmp20 = hasOwnProperty(View, obj4);
    cResult[6] = tmp4.container;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  }
  const obj5 = { style: tmp4.image, resizeMode: "contain", source: tmp5Result };
  const tmp10 = React3(FastImageDefault, obj5);
  cResult[0] = tmp5Result;
  cResult[1] = tmp4.image;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (function EmptyState() {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = shared;
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 11799 : 11800);
  const tmp2Result = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = tmp2Result.useLogAppLauncherEmptyStateView(tmp2(10622).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: items };
  items = [, ];
  const obj3 = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  items[0] = React3(FastImageDefault, obj3);
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.uDnXXj) };
  const Text = tmp2(5088).Text;
  intl = tmp2(1126).intl;
  items[1] = React3(Text, obj4);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default tmp4;
