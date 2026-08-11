// Module ID: 12487
// Function ID: 12488
// Name: navigateToPremiumHomePage
// Dependencies: [676, 6018, 7049, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12487 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6018) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(7049) /* pushLayer */.popLayer();
  const obj = require(7049) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
