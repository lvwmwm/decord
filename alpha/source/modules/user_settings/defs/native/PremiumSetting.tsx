// Module ID: 15915
// Function ID: 15916
// Name: PremiumSetting
// Dependencies: [19, 1390, 4831, 1085, 21, 14359, 4825, 1126, 558, 576, 7358, 10728, 15916, 10991, 9253, 15918, 2]

// Module 15915 (PremiumSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4825 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7358 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9253 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 14359 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 15916 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionStore from "SubscriptionStore" /* 4831 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanNavigateToPaymentSetting() {
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
}) : (function useCanNavigateToPaymentSetting() {
  return react.useCallback(() => {
    const obj = BlockedPaymentsCountryExperiment;
    const isPaymentsBlocked = obj.getIsPaymentsBlocked();
    let flag = !isPaymentsBlocked;
    const tmp = dependencyMap;
    if (isPaymentsBlocked) {
      require("openBlockedPaymentsCountryActionSheet")();
      flag = false;
    }
    return flag;
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumSettingTrailing() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumTabBadgeDefault, {});
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function usePremiumSettingTrailing() {
  return jsx(PremiumTabBadgeDefault, {});
});
let obj = {
  useTitle: function getPremiumSettingTitle() {
    let stringResult1;
    const obj = MobileNitroManageSubscriptionsSettingsExperiment;
    const mobileNitroManageSubscriptionsSettingsExperiment = obj.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const hasPremiumSubscriptionToDisplay = PremiumUtils.hasPremiumSubscriptionToDisplay;
    PremiumUtils;
    const currentUser = UserStore.getCurrentUser();
    const result = hasPremiumSubscriptionToDisplay(currentUser, SubscriptionStore.getPremiumTypeSubscription());
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (result) {
      let stringResult;
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        stringResult = string(t["4gwVVn"]);
      } else {
        stringResult = string(t["8jmdON"]);
      }
      stringResult1 = stringResult;
    } else {
      stringResult1 = string(t["8x0jKT"]);
    }
    return stringResult1;
  },
  parent: null,
  IconComponent: NitroWheelIcon.NitroWheelIcon,
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
