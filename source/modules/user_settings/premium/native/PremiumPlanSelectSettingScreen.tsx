// Module ID: 13893
// Function ID: 106270
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [31, 33, 6653, 12472, 2]
// Exports: default

// Module 13893 (PremiumPlanSelectSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(12472), {});
};
