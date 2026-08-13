// Module ID: 14295
// Function ID: 14296
// Name: PremiumScreen
// Dependencies: [19, 21, 6925, 1499, 7638, 6922, 2]
// Exports: default

// Module 14295 (PremiumScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6925) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1499) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7638).close;
  }
  obj = { onClose: close };
  const obj2 = require(1499) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6922), { onClose: close });
};
