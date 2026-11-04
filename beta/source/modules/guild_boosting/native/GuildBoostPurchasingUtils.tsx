// Module ID: 7586
// Function ID: 7587
// Name: GuildBoostPurchasingUtils
// Dependencies: [5, 2052, 1072, 1385, 5959, 1113, 1252, 6535, 7587, 7592, 7593, 7594, 2047, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 7586 (GuildBoostPurchasingUtils)
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

let allowYearlyBundles, analyticsLocation, analyticsLocations, guildId, onBack, onPaymentDismiss, onPaymentSuccess;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function alertUnableToManageSub(body, source) {
  let intl;
  obj = { title: intl.string(intl3.t["8P7MX0"]), body };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  show(obj);
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { type: metroRequire.IOS_CANNOT_MANAGE_SUBSCRIPTION, source };
  obj2.track(hasOwnProperty.OPEN_MODAL, obj3);
}
let obj = function _launchGuildBoostFlowOrAlert() {
  obj = _asyncToGenerator(async (analyticsLocation) => {
    let TIER_2;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let tmp;
      let tmp3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let premiumTypeSubscription;
          let externalManagementMessage;
          let c8;
          let productIdFromSubscription;
          c6 = 2;
          if (0 === onPaymentDismiss) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              analyticsLocation = undefined;
              analyticsLocations = undefined;
              guildId = undefined;
              onBack = undefined;
              onPaymentSuccess = undefined;
              ({ source: c0, analyticsLocations: c1, guildId: c2, onBack: c3, onPaymentSuccess: c4, onPaymentDismiss: c5 } = closure_0);
              premiumTypeSubscription = undefined;
              externalManagementMessage = undefined;
              c8 = undefined;
              productIdFromSubscription = undefined;
              allowYearlyBundles = undefined;
              onPaymentDismiss = 1;
              c6 = 1;
              return { value: "flexDirection", done: true };
            }
          } else {
            if (1 === onPaymentDismiss) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (closure_131_4.hasFetchedSubscriptions()) {
                premiumTypeSubscription = closure_131_4.getPremiumTypeSubscription();
                let renewalMutations;
                if (premiumTypeSubscription != null) {
                  renewalMutations = premiumTypeSubscription.renewalMutations;
                }
                if (null == renewalMutations) {
                  let status;
                  if (premiumTypeSubscription != null) {
                    status = premiumTypeSubscription.status;
                  }
                  if (status !== closure_131_7.BILLING_RETRY) {
                    const obj4 = closure_131_0(closure_131_2[8]);
                    externalManagementMessage = obj4.getExternalManagementMessage(premiumTypeSubscription);
                    if (null != externalManagementMessage) {
                      closure_131_11(externalManagementMessage, analyticsLocation);
                    } else {
                      c8 = null;
                      if (null != premiumTypeSubscription) {
                        onPaymentSuccess = 1;
                        const obj10 = closure_131_0(closure_131_2[9]);
                        productIdFromSubscription = obj10.getProductIdFromSubscription(premiumTypeSubscription, true);
                        const tmp82 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
                        let interval;
                        if (tmp82 != null) {
                          interval = tmp82.interval;
                        }
                        analyticsLocations = interval;
                        if (interval == null) {
                          analyticsLocations = null;
                        }
                        c8 = analyticsLocations;
                        onPaymentSuccess = 0;
                      }
                    }
                  } else {
                    const intl2 = closure_131_0(closure_131_2[5]).intl;
                    closure_131_11(intl2.string(closure_131_0(closure_131_2[5]).t.JakNQ8), analyticsLocation);
                  }
                } else {
                  const intl = closure_131_0(closure_131_2[5]).intl;
                  closure_131_11(intl.string(closure_131_0(closure_131_2[5]).t.npfhh0), analyticsLocation);
                }
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                let obj2 = closure_131_0(closure_131_2[7]);
                onPaymentDismiss = 2;
                let num3 = 1;
                c6 = 1;
                const obj8 = { value: obj2.fetchSubscriptions(), done: false };
                return obj8;
              }
            } else if (2 === onPaymentDismiss) {
              if (arg0 === 1) {
                let num2 = 3;
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              }
            } else {
              onPaymentSuccess = 0;
              c8 = null;
            }
            allowYearlyBundles = c8 === closure_131_10.YEAR;
            const obj9 = {
              showCurrentPlan: false,
              isBoostPurchaseFlow: true,
              allowYearlyBundles,
              predicate(interval) {
                      let tmp = !closure_1_10;
                      if (closure_1_10) {
                        tmp = !(interval.interval !== allowYearlyBundles.YEAR || interval.numPremiumGuild > 5);
                        const tmp3 = interval.interval !== allowYearlyBundles.YEAR || interval.numPremiumGuild > 5;
                      }
                      if (tmp) {
                        let num2 = 0;
                        const numPremiumGuild = interval.numPremiumGuild;
                        if (interval.premiumTier === TIER_2.TIER_2) {
                          num2 = closure_2_8;
                        }
                        let num3 = 0;
                        const sum = numPremiumGuild + num2;
                        if (null != closure_1_6) {
                          obj = analyticsLocation(guildId[12]);
                          const numPremiumGuildSubscriptions = obj.getNumPremiumGuildSubscriptions(closure_1_6.additionalPlans);
                          const obj2 = c1(guildId[12]);
                          num3 = numPremiumGuildSubscriptions + obj2.getNumIncludedPremiumGuildSubscriptionSlots(closure_1_6.planId);
                        }
                        tmp = sum > num3;
                      }
                      return tmp;
                    },
              analyticsLocation,
              analyticsLocations,
              guildId,
              onBack,
              onPaymentSuccess,
              onPaymentDismiss
            };
            const obj5 = closure_131_0(closure_131_2[11]);
            const result = obj5.launchPremiumPlanSelect(obj9);
          }
        } catch (tmp64) {
          if (0 === onPaymentSuccess) {
            c6 = 3;
            throw tmp64;
          } else {
            onPaymentDismiss = 3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire, SubscriptionStatusTypes: metroImportDefault } = Constants);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportAll, PremiumTypes: c9, SubscriptionIntervalTypes: c10 } = PremiumConstants);
let result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export function launchGuildBoostFlowOrAlert() {
  return obj(...arguments);
}
