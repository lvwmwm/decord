// Module ID: 11595
// Function ID: 11596
// Name: NoPermsState
// Dependencies: [19, 17, 21, 4836, 576, 4685, 4767, 11596, 11597, 11533, 8712, 4832, 1115, 2]
// Exports: default

// Module 11595 (NoPermsState)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
obj2 = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  let intl;
  let items;
  const tmp = closure_7();
  const obj = shared;
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 11596 : 11597);
  const tmp2Result = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = tmp2Result.useLogAppLauncherEmptyStateView(tmp2(8712).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: items };
  items = [, ];
  const obj3 = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  items[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: intl.string(intl2.t.uDnXXj) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items[1] = hasOwnProperty(Text, obj4);
  return metroRequire(_false, obj2);
};
