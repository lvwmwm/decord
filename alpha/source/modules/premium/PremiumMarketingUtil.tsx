// Module ID: 11596
// Function ID: 11597
// Name: PremiumMarketingUtil
// Dependencies: [1072, 7557, 7753, 1100, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11596 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1100 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import LayerActionCreators from "LayerActionCreators" /* 7753 */;
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
