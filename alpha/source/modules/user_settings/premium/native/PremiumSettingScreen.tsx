// Module ID: 17146
// Function ID: 17147
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7251, 1499, 7248, 7695, 2]
// Exports: default

// Module 17146 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1499 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7248 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7251 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7695 */;
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
