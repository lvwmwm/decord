// Module ID: 14340
// Function ID: 14341
// Name: PremiumScreen
// Dependencies: [19, 21, 7385, 1500, 7877, 7382, 2]
// Exports: default

// Module 14340 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(7385) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1500) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7877).close;
  }
  obj = { onClose: close };
  const obj2 = require(1500) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(7382), { onClose: close });
};
