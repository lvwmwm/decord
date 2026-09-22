// Module ID: 15275
// Function ID: 15276
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7241, 13814, 2]
// Exports: default

// Module 15275 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7241 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13814 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const obj2 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(PremiumPlanSelectDefault, {});
};
