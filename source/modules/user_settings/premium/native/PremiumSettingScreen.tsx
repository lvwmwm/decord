// Module ID: 14812
// Function ID: 14813
// Name: PremiumScreen
// Dependencies: [19, 21, 7168, 1498, 7771, 7165, 2]
// Exports: default

// Module 14812 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1498 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7165 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7168 */;
import dispatcherDefault from "dispatcher" /* 7771 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = dispatcherDefault.close;
  }
  obj = { onClose: close };
  const obj2 = useNavigation;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};
