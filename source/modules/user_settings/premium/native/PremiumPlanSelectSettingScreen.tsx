// Module ID: 14915
// Function ID: 14916
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 6934, 13469, 2]
// Exports: default

// Module 14915 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6934 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 13469 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(BoostPurchaseNitroBannerDefault, {});
};
