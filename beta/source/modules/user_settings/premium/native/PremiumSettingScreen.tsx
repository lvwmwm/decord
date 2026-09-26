// Module ID: 15264
// Function ID: 15265
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7271, 1484, 7267, 7687, 2]
// Exports: default

// Module 15264 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1484 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7267 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7271 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7687 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  const obj3 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};
