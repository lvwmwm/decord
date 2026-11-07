// Module ID: 12646
// Function ID: 12647
// Name: NoPermsState
// Dependencies: [19, 17, 21, 5140, 575, 5147, 5369, 12647, 12648, 12582, 11647, 5842, 5751, 1113, 2]
// Exports: default

// Module 12646 (NoPermsState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import shared from "shared" /* 5147 */;
import useThemeDefault from "useTheme" /* 5369 */;
import FastImageDefault from "FastImage" /* 5842 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12582 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
obj2 = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = shared;
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 12647 : 12648);
  const tmp2Result = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = tmp2Result.useLogAppLauncherEmptyStateView(tmp2(11647).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: items };
  items = [, ];
  const obj3 = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  items[0] = React3(FastImageDefault, obj3);
  const obj4 = { style: tmp.textContainer, variant: "body-sm/medium", color: "text-muted", children: intl.string(intl2.t.uDnXXj) };
  const Text = tmp2(5751).Text;
  intl = tmp2(1113).intl;
  items[1] = React3(Text, obj4);
  return hasOwnProperty(View, obj2);
};
