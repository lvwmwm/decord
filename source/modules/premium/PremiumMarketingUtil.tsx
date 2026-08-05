// Module ID: 12363
// Function ID: 12364
// Name: navigateToPremiumHomePage
// Dependencies: [676, 5910, 6940, 1222, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12363 (navigateToPremiumHomePage)
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(5910) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(6940) /* pushLayer */.popLayer();
  const obj = require(6940) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};
