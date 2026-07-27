// Module ID: 11566
// Function ID: 89978
// Name: _launchGuildBoostFlowOrAlert
// Dependencies: [5, 3783, 653, 1852, 4472, 1212, 675, 4452, 6495, 6489, 3777, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 11566 (_launchGuildBoostFlowOrAlert)
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
