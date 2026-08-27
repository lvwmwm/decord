// Module ID: 12439
// Function ID: 12440
// Name: navigateToPremiumHomePage
// Dependencies: [676, 6197, 7265, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12439 (navigateToPremiumHomePage)
import set from "set" /* 2 */;
import transitionTo from "transitionTo" /* 1222 */;
import openUserSettings from "openUserSettings" /* 6197 */;
import pushLayer from "pushLayer" /* 7265 */;
import ME from "ME" /* 676 */;

({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = set.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  pushLayer.popLayer();
  const obj = pushLayer;
  transitionTo.transitionTo(constants.APPLICATION_STORE);
};
