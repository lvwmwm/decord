// Module ID: 14040
// Function ID: 14041
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 6333, 12592, 2]
// Exports: default

// Module 14040 (PremiumPlanSelectSettingScreen)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = require(6333) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(12592), {});
};
