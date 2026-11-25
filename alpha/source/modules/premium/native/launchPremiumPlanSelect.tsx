// Module ID: 9310
// Function ID: 9311
// Name: launchPremiumPlanSelect
// Dependencies: [1071, 9109, 6099, 9060, 2119, 9060, 7320, 2]
// Exports: launchPremiumPlanSelect

// Module 9310 (launchPremiumPlanSelect)
import Constants from "Constants" /* 1071 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7320 */;
import PremiumModal from "PremiumModal" /* 9060 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 9109 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export function launchPremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let guildId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let showCurrentPlan;
  ({ predicate: require, navigation, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isBoostPurchaseFlow.allowYearlyBundles;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } = isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    const obj = PremiumBundledPlansUtils;
    const result = obj.shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2);
    let tmp2 = !result;
    if (tmp2) {
      let flag;
      if (require != null) {
        flag = require(isDeprecated);
      }
      if (flag == null) {
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
  const PREMIUM_PLAN_SELECT = UserSettingsSections.PREMIUM_PLAN_SELECT;
  if (null != navigation) {
    let obj = { predicate: wrappedPredicate, analyticsLocation, analyticsLocations, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss };
    navigation.push(PREMIUM_PLAN_SELECT, obj);
  } else {
    const pushLazy = flag2(6099).pushLazy;
    const obj3 = { initialRoute: PREMIUM_PLAN_SELECT, analyticsLocation, analyticsLocations, predicate: wrappedPredicate, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onBack: tmp, onPaymentSuccess, onPaymentDismiss };
    flag2(6099);
    const tmp8 = asyncRequire(9060, dependencyMap.paths);
    pushLazy(tmp8, obj3, PremiumModal.PREMIUM_KEY);
  }
  const obj2 = UserSettingsUtils;
  let result = obj2.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
}
