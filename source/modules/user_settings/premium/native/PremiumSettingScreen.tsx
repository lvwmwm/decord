// Module ID: 13937
// Function ID: 106575
// Name: PremiumScreen
// Dependencies: [31, 33, 6653, 1456, 7375, 6650, 2]
// Exports: default

// Module 13937 (PremiumScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = require(1456) /* useNavigation */.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(7375).close;
  }
  obj = { onClose: close };
  const obj2 = require(1456) /* useNavigation */;
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(6650), { onClose: close });
};
