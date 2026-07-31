// Module ID: 12209
// Function ID: 12210
// Name: navigateToPremiumHomePage
// Dependencies: [676, 6614, 5848, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12209 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6614) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(5848) /* pushLayer */.popLayer();
  const obj = require(5848) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
