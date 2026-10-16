// Module ID: 7354
// Function ID: 7355
// Name: launchPremiumPlanSelect
// Dependencies: [1087, 7351, 6153, 7355, 2002, 7355, 6908, 2]
// Exports: launchPremiumPlanSelect

// Module 7354 (launchPremiumPlanSelect)
import Constants from "Constants" /* 1087 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6908 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7351 */;
import PremiumModal from "PremiumModal" /* 7355 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
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
    const pushLazy = flag2(6153).pushLazy;
    const obj3 = { initialRoute: PREMIUM_PLAN_SELECT, analyticsLocation, analyticsLocations, predicate: wrappedPredicate, showCurrentPlan, isBoostPurchaseFlow: flag, planId, applicationId, guildId, onBack: tmp, onPaymentSuccess, onPaymentDismiss };
    flag2(6153);
    const tmp8 = asyncRequire(7355, dependencyMap.paths);
    pushLazy(tmp8, obj3, PremiumModal.PREMIUM_KEY);
  }
  const obj2 = UserSettingsUtils;
  let result = obj2.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};
