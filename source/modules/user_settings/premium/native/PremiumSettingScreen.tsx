// Module ID: 13993
// Function ID: 106880
// Name: PremiumScreen
// Dependencies: [31, 33, 6309, 1456, 6484, 6306, 2]
// Exports: default

// Module 13993 (PremiumScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6309) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1456) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(6484).close;
  }
  obj = { onClose: close };
  const obj2 = require(1456) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6306), { onClose: close });
};
