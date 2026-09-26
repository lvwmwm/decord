// Module ID: 12393
// Function ID: 12394
// Name: home/EmptyState
// Dependencies: [19, 17, 21, 4788, 576, 12333, 9555, 12394, 4784, 1115, 2]
// Exports: default

// Module 12393 (home/EmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4784 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9555 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12333 */;
import HomeEmptyStateDefault from "HomeEmptyState" /* 12394 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let obj2 = { container: { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" }, textContainer: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
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
};
