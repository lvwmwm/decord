// Module ID: 17030
// Function ID: 17031
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7285, 1499, 7282, 7720, 2]
// Exports: default

// Module 17030 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1499 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7282 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7285 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7720 */;
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
