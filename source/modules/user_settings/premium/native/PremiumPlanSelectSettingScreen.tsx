// Module ID: 13955
// Function ID: 106721
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [31, 33, 6273, 12506, 2]
// Exports: default

// Module 13955 (PremiumPlanSelectSettingScreen)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = require(6273) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(12506), {});
};
