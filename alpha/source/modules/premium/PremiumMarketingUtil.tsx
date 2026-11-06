// Module ID: 11801
// Function ID: 11802
// Name: PremiumMarketingUtil
// Dependencies: [1072, 7658, 7859, 1099, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11801 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1099 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import LayerActionCreators from "LayerActionCreators" /* 7859 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export function navigateToPremiumHomePage() {
  const obj = { screen: constants2.PREMIUM };
  openUserSettings.openUserSettings(obj);
}
export function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  const obj = LayerActionCreators;
  obj.popLayer();
  const obj2 = router_utils;
  obj2.transitionTo(constants.APPLICATION_STORE);
}
