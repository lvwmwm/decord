// Module ID: 12129
// Function ID: 95030
// Name: navigateToPremiumHomePage
// Dependencies: [653, 6554, 5817, 1198, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12129 (navigateToPremiumHomePage)
import ME from "ME";

let closure_2;
let closure_3;
({ Routes: closure_2, UserSettingsSections: closure_3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6554) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (null != arg0) {
    arg0();
  }
  require(5817) /* pushLayer */.popLayer();
  const obj = require(5817) /* pushLayer */;
  require(1198) /* shouldNavigate */.transitionTo(constants.APPLICATION_STORE);
};
