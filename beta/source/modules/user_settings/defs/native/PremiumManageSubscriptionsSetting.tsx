// Module ID: 15263
// Function ID: 15264
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1078, 558, 568, 7693, 11601, 4450, 13703, 11630, 1119, 15264, 15262, 2]

// Module 15263 (PremiumManageSubscriptionsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7693 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11601 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useCallback(() => {
  const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
  let flag = !isPaymentsBlocked;
  if (isPaymentsBlocked) {
    openBlockedPaymentsCountryActionSheetDefault();
    flag = false;
  }
  return flag;
}, []));
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "useShowManageSubscriptionsSetting" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (hasPremiumSubscriptionToDisplay) {
    hasPremiumSubscriptionToDisplay = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
  }
  return hasPremiumSubscriptionToDisplay;
}) : (() => {
  let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
  if (hasPremiumSubscriptionToDisplay) {
    hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
  }
  return hasPremiumSubscriptionToDisplay;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(15264).SubscriptionIcon,
  usePreNavigationAction: tmp2,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { location: "useShowManageSubscriptionsSetting" };
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
    }
    return hasPremiumSubscriptionToDisplay;
  }) : (() => {
    let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  }),
  screen: {
    route: fn(1078).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
