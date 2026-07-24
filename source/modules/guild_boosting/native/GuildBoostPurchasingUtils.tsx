// Module ID: 6641
// Function ID: 51009
// Name: _launchGuildBoostFlowOrAlert
// Dependencies: [5, 3782, 653, 1851, 4471, 1212, 675, 4451, 6642, 6647, 3776, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 6641 (_launchGuildBoostFlowOrAlert)
import getSystemLocale from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
async function _launchGuildBoostFlowOrAlert(arg0, arg1) {
  let iter = (function*(source) {
    let analyticsLocations;
    let guildId;
    let onBack;
    let onPaymentDismiss;
    let onPaymentSuccess;
    source = source.source;
    let premiumTypeSubscription;
    ({ analyticsLocations, guildId, onBack, onPaymentSuccess, onPaymentDismiss } = source);
    yield undefined;
    if (outer2_4.hasFetchedSubscriptions()) {
      premiumTypeSubscription = outer2_4.getPremiumTypeSubscription();
      let obj1 = outer2_0(outer2_2[8]);
      const externalManagementMessage = obj1.getExternalManagementMessage(premiumTypeSubscription);
      if (null != externalManagementMessage) {
        let obj = {};
        const intl = outer2_0(outer2_2[5]).intl;
        obj.title = intl.string(outer2_0(outer2_2[5]).t["8P7MX0"]);
        obj.body = externalManagementMessage;
        outer2_1(outer2_2[4]).show(obj);
        const obj5 = outer2_1(outer2_2[4]);
        obj = { type: outer2_6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source };
        outer2_1(outer2_2[6]).track(outer2_5.OPEN_MODAL, obj);
        const obj7 = outer2_1(outer2_2[6]);
      } else {
        obj1 = {
          showCurrentPlan: false,
          isBoostPurchaseFlow: true,
          predicate(premiumTier) {
                let num = 0;
                if (premiumTier.premiumTier === outer3_8.TIER_2) {
                  num = outer3_7;
                }
                let num2 = 0;
                const sum = premiumTier.numPremiumGuild + num;
                if (null != premiumTypeSubscription) {
                  const numPremiumGuildSubscriptions = outer3_0(outer3_2[10]).getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans);
                  const obj = outer3_0(outer3_2[10]);
                  num2 = numPremiumGuildSubscriptions + outer3_1(outer3_2[10]).getNumIncludedPremiumGuildSubscriptionSlots(premiumTypeSubscription.planId);
                  const obj2 = outer3_1(outer3_2[10]);
                }
                return sum > num2;
              },
          analyticsLocation: source,
          analyticsLocations,
          guildId,
          onBack,
          onPaymentSuccess,
          onPaymentDismiss
        };
        const result = outer2_0(outer2_2[9]).launchPremiumPlanSelect(obj1);
        const obj3 = outer2_0(outer2_2[9]);
      }
    } else {
      obj = outer2_0(outer2_2[7]);
      return yield obj.fetchSubscriptions();
    }
  })();
  iter.next();
  return iter;
}
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PremiumTypes: closure_8 } = GuildFeatures);
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert(arg0) {
  return _launchGuildBoostFlowOrAlert(...arguments);
};
