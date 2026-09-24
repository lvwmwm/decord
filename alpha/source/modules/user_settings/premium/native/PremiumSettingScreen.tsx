// Module ID: 15329
// Function ID: 15330
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7327, 1484, 7323, 7743, 2]
// Exports: default

// Module 15329 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1484 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7323 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7327 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7743 */;
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
