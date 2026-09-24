// Module ID: 7687
// Function ID: 7688
// Name: launchPremiumPlanSelect
// Dependencies: [1078, 7685, 4993, 7688, 1984, 7688, 7273, 2]
// Exports: launchPremiumPlanSelect

// Module 7687 (launchPremiumPlanSelect)
import Constants from "Constants" /* 1078 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7273 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7685 */;
import PremiumModal from "PremiumModal" /* 7688 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
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
    const result = PremiumBundledPlansUtils.shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2);
    let tmp2 = !result;
    if (!result) {
      let flag;
      if (closure_1_0 != null) {
        flag = closure_1_0(isDeprecated);
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
    const obj = { predicate: wrappedPredicate, analyticsLocation, analyticsLocations, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss };
    navigation.push(PREMIUM_PLAN_SELECT, obj);
  } else {
    const obj4 = { initialRoute: PREMIUM_PLAN_SELECT, analyticsLocation, analyticsLocations, predicate: wrappedPredicate, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onBack: tmp, onPaymentSuccess, onPaymentDismiss };
    const obj3 = flag2(4993);
    obj3.pushLazy(asyncRequireImpl(7688, dependencyMap.paths), obj4, PremiumModal.PREMIUM_KEY);
    const tmp7 = asyncRequireImpl(7688, dependencyMap.paths);
  }
  let result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};
