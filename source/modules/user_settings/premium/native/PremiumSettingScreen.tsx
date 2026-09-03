// Module ID: 14827
// Function ID: 14828
// Name: PremiumScreen
// Dependencies: [19, 21, 7169, 1498, 7774, 7166, 2]
// Exports: default

// Module 14827 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1498 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7166 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7169 */;
import dispatcherDefault from "dispatcher" /* 7774 */;
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
