// Module ID: 11935
// Function ID: 11936
// Name: PremiumMarketingUtil
// Dependencies: [1074, 7712, 7916, 1101, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11935 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1101 */;
import openUserSettings from "openUserSettings" /* 7712 */;
import LayerActionCreators from "LayerActionCreators" /* 7916 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  LayerActionCreators.popLayer();
  router_utils.transitionTo(constants.APPLICATION_STORE);
};
