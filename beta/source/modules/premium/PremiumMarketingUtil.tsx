// Module ID: 12547
// Function ID: 12548
// Name: PremiumMarketingUtil
// Dependencies: [1072, 8604, 8526, 1099, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 12547 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1099 */;
import LayerActionCreators from "LayerActionCreators" /* 8526 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export function navigateToPremiumHomePage() {
  const obj = { screen: constants2.PREMIUM };
  openUserSettings.openUserSettings(obj);
}
export function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  const obj = LayerActionCreators;
  obj.popLayer();
  const obj2 = router_utils;
  obj2.transitionTo(constants.APPLICATION_STORE);
}
