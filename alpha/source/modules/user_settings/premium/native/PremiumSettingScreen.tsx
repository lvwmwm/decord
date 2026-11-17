// Module ID: 17550
// Function ID: 17551
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7822, 1502, 7819, 9593, 2]
// Exports: default

// Module 17550 (PremiumSettingScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1502 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7819 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7822 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 9593 */;
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
