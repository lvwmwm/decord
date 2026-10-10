// Module ID: 11797
// Function ID: 11798
// Name: home/EmptyState
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 11727, 10622, 1126, 5088, 2]

// Module 11797 (home/EmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10622 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11727 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2, textContainer: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState() {
  let container;
  let first;
  let textContainer;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_4();
  const obj2 = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj2.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  ({ container, textContainer } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["V7+xhH"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.textContainer) {
    const tmp10 = jsx(Text_Text.Text, { style: textContainer, variant: "text-md/semibold", color: "text-default", children: first });
    cResult[1] = tmp4.textContainer;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const tmp12 = <View style={container}>{tmp8}</View>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function EmptyState() {
  let intl;
  const tmp = closure_4();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  ({ style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: intl.string(intl2.t["V7+xhH"]) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default tmp3;
