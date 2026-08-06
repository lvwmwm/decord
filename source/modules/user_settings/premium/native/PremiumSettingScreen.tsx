// Module ID: 14144
// Function ID: 14145
// Name: PremiumScreen
// Dependencies: [19, 21, 6799, 1480, 7514, 6796, 2]
// Exports: default

// Module 14144 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6799) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1480) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7514).close;
  }
  obj = { onClose: close };
  const obj2 = require(1480) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6796), { onClose: close });
};
