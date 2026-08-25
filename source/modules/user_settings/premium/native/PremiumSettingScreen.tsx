// Module ID: 14438
// Function ID: 14439
// Name: PremiumScreen
// Dependencies: [19, 21, 7021, 1500, 7737, 7018, 2]
// Exports: default

// Module 14438 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1500 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7018 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7021 */;
import dispatcherDefault from "dispatcher" /* 7737 */;
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
