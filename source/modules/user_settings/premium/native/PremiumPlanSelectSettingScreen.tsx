// Module ID: 14545
// Function ID: 14546
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7093, 13113, 2]
// Exports: default

// Module 14545 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7093 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 13113 */;
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
