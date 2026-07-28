// Module ID: 6525
// Function ID: 58102
// Name: launchPremiumPlanSelect
// Dependencies: [653, 6230, 4372, 6305, 1935, 6305, 6485, 2]
// Exports: launchPremiumPlanSelect

// Module 6525 (launchPremiumPlanSelect)
import { UserSettingsSections } from "ME";

let result = require("module_4372").fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let guildId;
  let navigation;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let require;
  let showCurrentPlan;
  ({ predicate: require, navigation, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } = isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    let tmp = !outer1_0(outer1_2[1]).shouldAlwaysExcludeFromPlanSelect(isDeprecated);
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
    const obj3 = importDefault(4372);
    obj3.pushLazy(require(1935) /* maybeLoadBundle */(6305, dependencyMap.paths), obj, require(6305) /* getScreens */.PREMIUM_KEY);
    const tmp7 = require(1935) /* maybeLoadBundle */(6305, dependencyMap.paths);
  }
  const result = require(6485) /* getSanitizedRestrictedGuilds */.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};
