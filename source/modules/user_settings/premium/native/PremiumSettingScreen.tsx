// Module ID: 14238
// Function ID: 14239
// Name: PremiumScreen
// Dependencies: [19, 21, 6880, 1499, 7595, 6877, 2]
// Exports: default

// Module 14238 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6880) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1499) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7595).close;
  }
  obj = { onClose: close };
  const obj2 = require(1499) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6877), { onClose: close });
};
