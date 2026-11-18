// Module ID: 16207
// Function ID: 16208
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7325, 1502, 7322, 9007, 2]
// Exports: default

// Module 16207 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1502 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7322 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7325 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9007 */;
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
