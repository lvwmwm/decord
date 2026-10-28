// Module ID: 11339
// Function ID: 11340
// Name: PremiumMarketingUtil
// Dependencies: [1084, 7526, 7725, 1111, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11339 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1111 */;
import openUserSettings from "openUserSettings" /* 7526 */;
import LayerActionCreators from "LayerActionCreators" /* 7725 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  const obj = { screen: constants2.PREMIUM };
  openUserSettings.openUserSettings(obj);
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  const obj = LayerActionCreators;
  obj.popLayer();
  const obj2 = router_utils;
  obj2.transitionTo(constants.APPLICATION_STORE);
};
