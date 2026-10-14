// Module ID: 14795
// Function ID: 14796
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1085, 558, 576, 6923, 11092, 4528, 13202, 11129, 1126, 14796, 14794, 2]

// Module 14795 (PremiumManageSubscriptionsSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 6923 */;
import SubscriptionIcon from "SubscriptionIcon" /* 14796 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const MobileNitroManageSubscriptionsSettingsExperiment = tmp(13202);
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = BlockedPaymentsCountryExperiment;
      const isPaymentsBlocked = obj.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      const tmp = dependencyMap;
      if (isPaymentsBlocked) {
        require("openBlockedPaymentsCountryActionSheet")();
        flag = false;
      }
      return flag;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useCallback(() => {
  const obj = BlockedPaymentsCountryExperiment;
  const isPaymentsBlocked = obj.getIsPaymentsBlocked();
  let flag = !isPaymentsBlocked;
  const tmp = dependencyMap;
  if (isPaymentsBlocked) {
    require("openBlockedPaymentsCountryActionSheet")();
    flag = false;
  }
  return flag;
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  const obj2 = PremiumUtils;
  let hasPremiumSubscriptionToDisplay = obj2.useHasPremiumSubscriptionToDisplay();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "useShowManageSubscriptionsSetting" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmpResult = MobileNitroManageSubscriptionsSettingsExperiment;
  if (hasPremiumSubscriptionToDisplay) {
    hasPremiumSubscriptionToDisplay = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
  }
  return hasPremiumSubscriptionToDisplay;
}) : (() => {
  const obj = PremiumUtils;
  let hasPremiumSubscriptionToDisplay = obj.useHasPremiumSubscriptionToDisplay();
  const obj2 = MobileNitroManageSubscriptionsSettingsExperiment;
  if (hasPremiumSubscriptionToDisplay) {
    hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
  }
  return hasPremiumSubscriptionToDisplay;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: SubscriptionIcon.SubscriptionIcon,
  usePreNavigationAction: tmp2,
  usePredicate: tmp3,
  screen: {
    route: UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
