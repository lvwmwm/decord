// Module ID: 12320
// Function ID: 12321
// Name: navigateToPremiumHomePage
// Dependencies: [676, 7360, 5353, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12320 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(7360) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(5353) /* pushLayer */.popLayer();
  const obj = require(5353) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
