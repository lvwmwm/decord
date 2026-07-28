// Module ID: 11605
// Function ID: 90129
// Name: _launchGuildBoostFlowOrAlert
// Dependencies: [5, 3817, 653, 1852, 4506, 1212, 675, 4486, 6531, 6525, 3811, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 11605 (_launchGuildBoostFlowOrAlert)
import getSystemLocale from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function _launchGuildBoostFlowOrAlert() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PremiumTypes: closure_8 } = GuildFeatures);
const result = require("ME").fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert(arg0) {
  return _launchGuildBoostFlowOrAlert(...arguments);
};
