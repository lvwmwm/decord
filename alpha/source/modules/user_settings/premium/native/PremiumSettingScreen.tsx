// Module ID: 16490
// Function ID: 16491
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7350, 1501, 7347, 9103, 2]
// Exports: default

// Module 16490 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1501 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7347 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7350 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9103 */;
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
