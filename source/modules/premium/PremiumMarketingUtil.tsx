// Module ID: 12153
// Function ID: 95225
// Name: navigateToPremiumHomePage
// Dependencies: [653, 5796, 6821, 1198, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12153 (navigateToPremiumHomePage)
import ME from "ME";

let closure_2;
let closure_3;
({ Routes: closure_2, UserSettingsSections: closure_3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(5796) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (null != arg0) {
    arg0();
  }
  require(6821) /* pushLayer */.popLayer();
  const obj = require(6821) /* pushLayer */;
  require(1198) /* shouldNavigate */.transitionTo(constants.APPLICATION_STORE);
};
