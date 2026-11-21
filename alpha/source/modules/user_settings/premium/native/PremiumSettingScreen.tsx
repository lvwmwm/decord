// Module ID: 16285
// Function ID: 16286
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7414, 1500, 7411, 9101, 2]
// Exports: default

// Module 16285 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1500 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7411 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7414 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9101 */;
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
