// Module ID: 7695
// Function ID: 7696
// Name: GuildBoostPurchasingUtils
// Dependencies: [5, 2176, 1072, 1387, 6123, 1113, 1252, 7696, 6621, 7701, 7702, 7703, 2171, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 7695 (GuildBoostPurchasingUtils)
import intl3 from "intl" /* 1113 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7696 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let allowYearlyBundles, analyticsLocation, analyticsLocations, guildId, onBack, onPaymentDismiss, onPaymentSuccess;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getMobileBoostPurchaseBlockedMessage(premiumSubscription) {
  let stringResult;
  let renewalMutations;
  if (premiumSubscription != null) {
    renewalMutations = premiumSubscription.renewalMutations;
  }
  if (null != renewalMutations) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.npfhh0);
  } else {
    let status;
    if (premiumSubscription != null) {
      status = premiumSubscription.status;
    }
    if (status === metroImportDefault.BILLING_RETRY) {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t.JakNQ8);
    } else {
      obj = PremiumManagementUtils;
      stringResult = obj.getExternalManagementMessage(premiumSubscription);
    }
  }
  return stringResult;
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
      function alertUnableToManageSub(body, c0) {
        let intl;
        obj = { title: intl.string(analyticsLocation(guildId[5]).t["8P7MX0"]), body };
        const show = analyticsLocations(guildId[4]).show;
        analyticsLocations(guildId[4]);
        intl = analyticsLocation(guildId[5]).intl;
        show(obj);
        const obj2 = analyticsLocations(guildId[6]);
        const obj3 = { type: closure_1_6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source: c0 };
        obj2.track(constants.OPEN_MODAL, obj3);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let premiumTypeSubscription;
          let closure_7;
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
              closure_7 = undefined;
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
                closure_7 = closure_131_11(premiumTypeSubscription);
                if (null != closure_7) {
                  alertUnableToManageSub(closure_7, analyticsLocation);
                } else {
                  c8 = null;
                  if (null != premiumTypeSubscription) {
                    onPaymentSuccess = 1;
                    const obj9 = closure_131_0(closure_131_2[9]);
                    productIdFromSubscription = obj9.getProductIdFromSubscription(premiumTypeSubscription, true);
                    const tmp54 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
                    let interval;
                    if (tmp54 != null) {
                      interval = tmp54.interval;
                    }
                    analyticsLocations = interval;
                    if (interval == null) {
                      analyticsLocations = null;
                    }
                    c8 = analyticsLocations;
                    onPaymentSuccess = 0;
                  }
                }
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let obj2 = closure_131_0(closure_131_2[8]);
                onPaymentDismiss = 2;
                let num3 = 1;
                c6 = 1;
                const obj7 = { value: obj2.fetchSubscriptions(), done: false };
                return obj7;
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
            const obj8 = {
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
            const obj4 = closure_131_0(closure_131_2[11]);
            const result = obj4.launchPremiumPlanSelect(obj8);
          }
        } catch (tmp36) {
          if (0 === onPaymentSuccess) {
            c6 = 3;
            throw tmp36;
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

export { getMobileBoostPurchaseBlockedMessage };
export function launchGuildBoostFlowOrAlert() {
  return obj(...arguments);
}
