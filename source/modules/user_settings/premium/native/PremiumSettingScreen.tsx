// Module ID: 14107
// Function ID: 14108
// Name: PremiumScreen
// Dependencies: [19, 21, 6772, 1480, 7486, 6769, 2]
// Exports: default

// Module 14107 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6772) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1480) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7486).close;
  }
  obj = { onClose: close };
  const obj2 = require(1480) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6769), { onClose: close });
};
