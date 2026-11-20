// Module ID: 16162
// Function ID: 16163
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7294, 1500, 7291, 8981, 2]
// Exports: default

// Module 16162 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1500 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7291 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7294 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 8981 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  UserSettingsPremiumDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  return <tmp5 onClose={close} />;
};
