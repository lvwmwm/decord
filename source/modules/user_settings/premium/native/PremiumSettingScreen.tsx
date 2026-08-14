// Module ID: 14308
// Function ID: 14309
// Name: PremiumScreen
// Dependencies: [19, 21, 6946, 1499, 7659, 6943, 2]
// Exports: default

// Module 14308 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6946) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1499) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7659).close;
  }
  obj = { onClose: close };
  const obj2 = require(1499) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6943), { onClose: close });
};
