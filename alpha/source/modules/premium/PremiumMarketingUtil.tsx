// Module ID: 11946
// Function ID: 11947
// Name: PremiumMarketingUtil
// Dependencies: [1071, 8074, 7996, 1098, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11946 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1098 */;
import LayerActionCreators from "LayerActionCreators" /* 7996 */;
import openUserSettings from "openUserSettings" /* 8074 */;
import Constants from "Constants" /* 1071 */;
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
