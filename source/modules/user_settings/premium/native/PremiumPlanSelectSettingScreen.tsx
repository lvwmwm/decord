// Module ID: 14596
// Function ID: 14597
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7159, 13199, 2]
// Exports: default

// Module 14596 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7159 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 13199 */;
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
