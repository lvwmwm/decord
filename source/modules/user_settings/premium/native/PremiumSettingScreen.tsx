// Module ID: 14983
// Function ID: 14984
// Name: PremiumScreen
// Dependencies: [19, 21, 6994, 1483, 6990, 7413, 2]
// Exports: default

// Module 14983 (PremiumScreen)
import noopAll from "noop" /* 19 */;
import useNavigation from "useNavigation" /* 1483 */;
import dispatcherDefault from "dispatcher" /* 6990 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7413 */;
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
