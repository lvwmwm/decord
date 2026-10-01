// Module ID: 16561
// Function ID: 16562
// Name: MainTabsEmptyChatPanel
// Dependencies: [19, 17, 21, 4836, 576, 11021, 1613, 9685, 16562, 2]
// Exports: default

// Module 16561 (MainTabsEmptyChatPanel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import useDrawerWidth from "useDrawerWidth" /* 11021 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp3;
const FavoritesEmptyStateDefault = tmp3(16562);
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((left, marginTop) => {
  let obj2;
  const obj = { container: obj2 };
  obj2 = { left, marginTop, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  const obj = useDrawerWidth;
  const drawerWidth = obj.useDrawerWidth();
  let tmp5 = null;
  const tmp4 = closure_6(drawerWidth, useSafeAreaInsetsDefault().top);
  const obj2 = FavoritesHooks;
  if (obj2.useIsFavoritesGuildSelected()) {
    tmp5 = <React3 style={tmp4.container} pointerEvents="box-none">{jsx(FavoritesEmptyStateDefault, {})}</React3>;
  }
  return tmp5;
};
