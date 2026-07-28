// Module ID: 14000
// Function ID: 106899
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [31, 33, 6309, 12550, 2]
// Exports: default

// Module 14000 (PremiumPlanSelectSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = require(6309) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(12550), {});
};
