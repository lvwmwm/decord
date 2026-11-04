// Module ID: 11826
// Function ID: 11827
// Name: PremiumMarketingUtil
// Dependencies: [1072, 7703, 7900, 1099, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11826 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1099 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import LayerActionCreators from "LayerActionCreators" /* 7900 */;
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
