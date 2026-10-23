// Module ID: 11291
// Function ID: 11292
// Name: PremiumMarketingUtil
// Dependencies: [1087, 7488, 7688, 1114, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11291 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1114 */;
import openUserSettings from "openUserSettings" /* 7488 */;
import LayerActionCreators from "LayerActionCreators" /* 7688 */;
import Constants from "Constants" /* 1087 */;
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
