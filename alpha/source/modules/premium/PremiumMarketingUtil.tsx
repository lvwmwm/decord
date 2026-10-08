// Module ID: 11347
// Function ID: 11348
// Name: PremiumMarketingUtil
// Dependencies: [1085, 7084, 7295, 1112, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11347 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1112 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import LayerActionCreators from "LayerActionCreators" /* 7295 */;
import Constants from "Constants" /* 1085 */;
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
