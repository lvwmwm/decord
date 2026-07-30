// Module ID: 11625
// Function ID: 11626
// Name: _launchGuildBoostFlowOrAlert
// Dependencies: [5, 3841, 676, 1876, 4529, 1236, 698, 4509, 6549, 6543, 3835, 2]
// Exports: launchGuildBoostFlowOrAlert

// Module 11625 (_launchGuildBoostFlowOrAlert)
import getSystemLocale from "getSystemLocale";
import reset from "reset";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _launchGuildBoostFlowOrAlert() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ source: c0, analyticsLocations: c1, guildId: c2, onBack: c3, onPaymentSuccess: c4, onPaymentDismiss: c5 } = callback);
              let premiumTypeSubscription;
              let externalManagementMessage;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (!c4.hasFetchedSubscriptions()) {
                obj1 = callback(4509);
                c3 = 2;
                c4 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj1.fetchSubscriptions();
                return obj2;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            premiumTypeSubscription = c4.getPremiumTypeSubscription();
            let obj3 = callback(6549);
            externalManagementMessage = obj3.getExternalManagementMessage(premiumTypeSubscription);
            if (null != externalManagementMessage) {
              (function alertUnableToManageSub(closure_7, c0) {
                let obj = _undefined2(_undefined3[4]);
                obj = { title: null, body: null };
                const intl = _undefined(_undefined3[5]).intl;
                obj[0] = intl.string(_undefined(_undefined3[5]).t["8P7MX0"]);
                obj[1] = closure_7;
                obj.show(obj);
                obj = { type: closure_6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source: c0 };
                _undefined2(_undefined3[6]).track(_undefined4.OPEN_MODAL, obj);
              })(externalManagementMessage, callback);
            } else {
              obj3 = { showCurrentPlan: false, isBoostPurchaseFlow: true, predicate: null, analyticsLocation: null, analyticsLocations: null, guildId: null, onBack: null, onPaymentSuccess: null, onPaymentDismiss: null };
              obj3[2] = function predicate(premiumTier) {
                let num = 0;
                if (premiumTier.premiumTier === outer1_8.TIER_2) {
                  num = closure_7;
                }
                let num2 = 0;
                const sum = premiumTier.numPremiumGuild + num;
                if (null != closure_6) {
                  const numPremiumGuildSubscriptions = _undefined(_undefined3[10]).getNumPremiumGuildSubscriptions(closure_6.additionalPlans);
                  const obj = _undefined(_undefined3[10]);
                  num2 = numPremiumGuildSubscriptions + _undefined2(_undefined3[10]).getNumIncludedPremiumGuildSubscriptionSlots(closure_6.planId);
                  const obj2 = _undefined2(_undefined3[10]);
                }
                return sum > num2;
              };
              obj3[3] = callback;
              obj3[4] = c1;
              obj3[5] = dependencyMap;
              obj3[6] = c3;
              obj3[7] = c4;
              obj3[8] = c5;
              const result = callback(6543).launchPremiumPlanSelect(obj3);
              const obj5 = callback(6543);
            }
            c4 = 3;
          }
        } catch (tmp32) {
          c4 = tmp;
          throw tmp32;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _launchGuildBoostFlowOrAlert = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: error, PremiumTypes: metroImportAll } = GuildFeatures);
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert(arg0) {
  const self = this;
  const apply = _launchGuildBoostFlowOrAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
