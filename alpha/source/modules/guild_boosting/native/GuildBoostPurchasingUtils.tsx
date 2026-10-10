// Module ID: 7119
// Function ID: 7120
// Name: GuildBoostPurchasingUtils
// Dependencies: [5, 4775, 1085, 1392, 5300, 1126, 1265, 5724, 7120, 7125, 7126, 7127, 7128, 4769, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 7119 (GuildBoostPurchasingUtils)
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import size from "module_2" /* 2 */;

let analyticsLocation, analyticsLocations, guildId, onBack, onPaymentDismiss, onPaymentSuccess;

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
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let premiumTypeSubscription;
          let externalManagementMessage;
          let c8;
          let productIdFromSubscription;
          let mobileBoostingEnabled;
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
              mobileBoostingEnabled = undefined;
              onPaymentDismiss = 1;
              c6 = 1;
              return { value: "Set", done: true };
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
                        const obj11 = closure_131_0(closure_131_2[9]);
                        productIdFromSubscription = obj11.getProductIdFromSubscription(premiumTypeSubscription, true);
                        const tmp88 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
                        let interval;
                        if (tmp88 != null) {
                          interval = tmp88.interval;
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
                return { value: "IconComponent", done: "+51" };
              } else {
                let obj2 = closure_131_0(closure_131_2[7]);
                onPaymentDismiss = 2;
                let num3 = 1;
                c6 = 1;
                const obj9 = { value: obj2.fetchSubscriptions(), done: false };
                return obj9;
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
            const obj5 = closure_131_0(closure_131_2[11]);
            mobileBoostingEnabled = obj5.getMobileBoostingEnabled("GuildBoostPurchasing") && c8 === closure_131_10.YEAR;
            const obj10 = {
              showCurrentPlan: false,
              isBoostPurchaseFlow: true,
              allowYearlyBundles: mobileBoostingEnabled,
              predicate(interval) {
                      let tmp = !closure_1_10;
                      if (closure_1_10) {
                        tmp = !(interval.interval !== constants.YEAR || interval.numPremiumGuild > 5);
                        const tmp3 = interval.interval !== constants.YEAR || interval.numPremiumGuild > 5;
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
                          obj = analyticsLocation(guildId[13]);
                          const numPremiumGuildSubscriptions = obj.getNumPremiumGuildSubscriptions(closure_1_6.additionalPlans);
                          const obj2 = c1(guildId[13]);
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
            const obj6 = closure_131_0(closure_131_2[12]);
            const result = obj6.launchPremiumPlanSelect(obj10);
          }
        } catch (tmp70) {
          if (0 === onPaymentSuccess) {
            c6 = 3;
            throw tmp70;
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

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert() {
  return obj(...arguments);
};
