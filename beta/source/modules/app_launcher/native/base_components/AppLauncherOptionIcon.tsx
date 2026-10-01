// Module ID: 11661
// Function ID: 11662
// Name: AppLauncherOptionIcon
// Dependencies: [19, 17, 21, 4836, 576, 2]
// Exports: default

// Module 11661 (AppLauncherOptionIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { iconWrapper: { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round } };
({ justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round });
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  const wrapperStyle = wrapperSize.wrapperStyle;
  if (num === undefined) {
    num = 32;
  }
  const icon = wrapperSize.icon;
  const items = [styles().iconWrapper, wrapperStyle, { height: num, width: num }];
  return <View style={items}>{icon}</View>;
};
export const useAppLauncherOptionIconStyles = styles;
