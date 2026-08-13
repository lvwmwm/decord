// Module ID: 12550
// Function ID: 12551
// Name: navigateToPremiumHomePage
// Dependencies: [676, 6059, 7094, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12550 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6059) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(7094) /* pushLayer */.popLayer();
  const obj = require(7094) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
