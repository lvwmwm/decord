// Module ID: 14908
// Function ID: 14909
// Name: PremiumScreen
// Dependencies: [19, 21, 6934, 1498, 6930, 7346, 2]
// Exports: default

// Module 14908 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1498 */;
import dispatcherDefault from "dispatcher" /* 6930 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6934 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7346 */;
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
