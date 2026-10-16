// Module ID: 11093
// Function ID: 11094
// Name: PremiumMarketingUtil
// Dependencies: [1087, 7317, 7525, 1114, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11093 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1114 */;
import openUserSettings from "openUserSettings" /* 7317 */;
import LayerActionCreators from "LayerActionCreators" /* 7525 */;
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
