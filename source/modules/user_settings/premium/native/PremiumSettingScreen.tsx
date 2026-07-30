// Module ID: 14009
// Function ID: 14010
// Name: PremiumScreen
// Dependencies: [19, 21, 6327, 1480, 6502, 6324, 2]
// Exports: default

// Module 14009 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6327) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1480) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(6502).close;
  }
  obj = { onClose: close };
  const obj2 = require(1480) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6324), { onClose: close });
};
