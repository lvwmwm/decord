// Module ID: 13949
// Function ID: 106707
// Name: PremiumScreen
// Dependencies: [31, 33, 6273, 1456, 6448, 6270, 2]
// Exports: default

// Module 13949 (PremiumScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6273) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1456) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(6448).close;
  }
  obj = { onClose: close };
  const obj2 = require(1456) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6270), { onClose: close });
};
