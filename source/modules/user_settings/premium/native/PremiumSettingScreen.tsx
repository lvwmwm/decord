// Module ID: 14033
// Function ID: 14034
// Name: PremiumScreen
// Dependencies: [19, 21, 6333, 1480, 6508, 6330, 2]
// Exports: default

// Module 14033 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6333) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1480) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(6508).close;
  }
  obj = { onClose: close };
  const obj2 = require(1480) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6330), { onClose: close });
};
