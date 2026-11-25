// Module ID: 16439
// Function ID: 16440
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7319, 1500, 7316, 9061, 2]
// Exports: default

// Module 16439 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1500 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7316 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7319 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9061 */;
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
