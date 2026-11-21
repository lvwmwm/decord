// Module ID: 12980
// Function ID: 12981
// Name: EmptyState
// Dependencies: [19, 17, 21, 4913, 575, 12921, 10676, 5504, 1112, 2]
// Exports: default

// Module 12980 (EmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import Text_Text from "Text/Text" /* 5504 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10676 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12921 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2, textContainer: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  let intl;
  const tmp = closure_4();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  ({ style: tmp.textContainer, variant: "body-md/semibold", color: "text-default", children: intl.string(intl2.t["V7+xhH"]) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
};
