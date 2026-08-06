// Module ID: 12400
// Function ID: 12401
// Name: navigateToPremiumHomePage
// Dependencies: [676, 5937, 6967, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12400 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(5937) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(6967) /* pushLayer */.popLayer();
  const obj = require(6967) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
