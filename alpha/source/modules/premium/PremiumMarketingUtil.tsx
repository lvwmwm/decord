// Module ID: 11393
// Function ID: 11394
// Name: PremiumMarketingUtil
// Dependencies: [1084, 7549, 7748, 1111, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11393 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1111 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import LayerActionCreators from "LayerActionCreators" /* 7748 */;
import Constants from "Constants" /* 1084 */;
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
