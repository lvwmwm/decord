// Module ID: 12667
// Function ID: 12668
// Name: EmptyState
// Dependencies: [19, 17, 21, 5143, 575, 12604, 11699, 5763, 1113, 2]
// Exports: default

// Module 12667 (EmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5763 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11699 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12604 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
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
