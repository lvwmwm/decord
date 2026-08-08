// Module ID: 12482
// Function ID: 12483
// Name: navigateToPremiumHomePage
// Dependencies: [676, 6016, 7046, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12482 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6016) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(7046) /* pushLayer */.popLayer();
  const obj = require(7046) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
