// Module ID: 14158
// Function ID: 14159
// Name: PremiumScreen
// Dependencies: [19, 21, 6818, 1480, 7533, 6815, 2]
// Exports: default

// Module 14158 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6818) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1480) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7533).close;
  }
  obj = { onClose: close };
  const obj2 = require(1480) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6815), { onClose: close });
};
