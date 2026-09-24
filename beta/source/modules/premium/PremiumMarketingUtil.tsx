// Module ID: 11753
// Function ID: 11754
// Name: PremiumMarketingUtil
// Dependencies: [1078, 7658, 7865, 1105, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11753 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1105 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import LayerActionCreators from "LayerActionCreators" /* 7865 */;
import Constants from "Constants" /* 1078 */;
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
