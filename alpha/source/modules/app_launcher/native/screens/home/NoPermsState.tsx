// Module ID: 12265
// Function ID: 12266
// Name: NoPermsState
// Dependencies: [19, 17, 21, 5009, 575, 5016, 5248, 12266, 12267, 12201, 11467, 5712, 5619, 1114, 2]
// Exports: default

// Module 12265 (NoPermsState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12201 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 12266 : 12267);
  const tmp2Result = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = tmp2Result.useLogAppLauncherEmptyStateView(tmp2(11467).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: items };
  items = [, ];
  const obj3 = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  items[0] = React3(FastImageDefault, obj3);
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.uDnXXj) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items[1] = React3(Text, obj4);
  return hasOwnProperty(View, obj2);
};
