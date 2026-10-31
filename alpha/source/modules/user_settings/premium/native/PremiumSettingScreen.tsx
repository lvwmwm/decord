// Module ID: 16874
// Function ID: 16875
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7164, 1497, 7161, 7596, 2]
// Exports: default

// Module 16874 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1497 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7161 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7164 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7596 */;
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
