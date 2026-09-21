// Module ID: 12251
// Function ID: 12252
// Name: home/EmptyState
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 12181, 9519, 12252, 1119, 4754, 2]

// Module 12251 (home/EmptyState)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9519 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12181 */;
import HomeEmptyStateDefault from "HomeEmptyState" /* 12252 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" }, textContainer: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp4 = closure_6();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = React4(HomeEmptyStateDefault, {});
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["V7+xhH"]);
    cResult[1] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== tmp4.textContainer) {
    const obj3 = { style: tmp4.textContainer, variant: "text-md/semibold", color: "text-default", children: tmp10 };
    const tmp14 = React4(tmp(4754).Text, obj3);
    cResult[2] = tmp4.textContainer;
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    if (cResult[5] === tmp12) {
      let tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj4 = { style: tmp4.container, children: null };
  const items = [first, tmp12];
  obj4.children = items;
  const tmp16 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.container;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  const tmp = closure_6();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  const obj2 = { style: tmp.container, children: null };
  const items = [React4(HomeEmptyStateDefault, {}), ];
  const obj3 = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["V7+xhH"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});
