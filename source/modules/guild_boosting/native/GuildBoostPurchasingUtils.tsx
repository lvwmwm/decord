// Module ID: 6636
// Function ID: 50969
// Name: _launchGuildBoostFlowOrAlert
// Dependencies: []
// Exports: launchGuildBoostFlowOrAlert

// Module 6636 (_launchGuildBoostFlowOrAlert)
async function _launchGuildBoostFlowOrAlert(arg0, arg1) {
  const fn = function*(source) {
    let analyticsLocations;
    let guildId;
    let onBack;
    let onPaymentDismiss;
    let onPaymentSuccess;
    source = source.source;
    let premiumTypeSubscription;
    ({ analyticsLocations, guildId, onBack, onPaymentSuccess, onPaymentDismiss } = source);
    yield undefined;
    if (closure_4.hasFetchedSubscriptions()) {
      premiumTypeSubscription = closure_4.getPremiumTypeSubscription();
      let obj1 = premiumTypeSubscription(closure_2[8]);
      const externalManagementMessage = obj1.getExternalManagementMessage(premiumTypeSubscription);
      if (null != externalManagementMessage) {
        let obj = {};
        const intl = premiumTypeSubscription(closure_2[5]).intl;
        obj.title = intl.string(premiumTypeSubscription(closure_2[5]).t.8P7MX0);
        obj.body = externalManagementMessage;
        callback(closure_2[4]).show(obj);
        const obj5 = callback(closure_2[4]);
        obj = { type: constants2.IOS_CANNOT_MANAGE_SUBSCRIPTION, source };
        callback(closure_2[6]).track(constants.OPEN_MODAL, obj);
        const obj7 = callback(closure_2[6]);
      } else {
        obj1 = {
          "Null": 1766088043,
          "Null": 827788593,
          predicate(premiumTier) {
                let num = 0;
                if (premiumTier.premiumTier === TIER_2.TIER_2) {
                  num = closure_7;
                }
                let num2 = 0;
                const sum = premiumTier.numPremiumGuild + num;
                if (null != premiumTypeSubscription) {
                  const numPremiumGuildSubscriptions = premiumTypeSubscription(closure_2[10]).getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans);
                  const obj = premiumTypeSubscription(closure_2[10]);
                  num2 = numPremiumGuildSubscriptions + callback(closure_2[10]).getNumIncludedPremiumGuildSubscriptionSlots(premiumTypeSubscription.planId);
                  const obj2 = callback(closure_2[10]);
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
        const result = premiumTypeSubscription(closure_2[9]).launchPremiumPlanSelect(obj1);
        const obj3 = premiumTypeSubscription(closure_2[9]);
      }
    } else {
      obj = premiumTypeSubscription(closure_2[7]);
      return yield obj.fetchSubscriptions();
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PremiumTypes: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert(arg0) {
  return _launchGuildBoostFlowOrAlert(...arguments);
};
