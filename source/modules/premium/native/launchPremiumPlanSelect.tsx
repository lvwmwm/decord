// Module ID: 6642
// Function ID: 50990
// Name: launchPremiumPlanSelect
// Dependencies: []
// Exports: launchPremiumPlanSelect

// Module 6642 (launchPremiumPlanSelect)
const UserSettingsSections = require(dependencyMap[0]).UserSettingsSections;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let guildId;
  let navigation;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let showCurrentPlan;
  ({ predicate: closure_0, navigation, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } = isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    let tmp = !callback(closure_2[1]).shouldAlwaysExcludeFromPlanSelect(isDeprecated);
    if (tmp) {
      let tmp4;
      if (null != callback) {
        tmp4 = callback(isDeprecated);
      }
      tmp = null == tmp4 || tmp4;
      const tmp6 = null == tmp4 || tmp4;
    }
    return tmp;
  }
  const PREMIUM_PLAN_SELECT = UserSettingsSections.PREMIUM_PLAN_SELECT;
  if (null != navigation) {
    let obj = { predicate: wrappedPredicate, analyticsLocation, analyticsLocations, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss };
    navigation.push(PREMIUM_PLAN_SELECT, obj);
  } else {
    obj = { initialRoute: PREMIUM_PLAN_SELECT, analyticsLocation, analyticsLocations, predicate: wrappedPredicate, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onBack: tmp, onPaymentSuccess, onPaymentDismiss };
    const obj3 = importDefault(dependencyMap[2]);
    obj3.pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), obj, require(dependencyMap[5]).PREMIUM_KEY);
    const tmp7 = require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths);
  }
  const result = require(dependencyMap[6]).trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};
