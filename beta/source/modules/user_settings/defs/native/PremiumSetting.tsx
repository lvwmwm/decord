// Module ID: 14505
// Function ID: 14506
// Name: PremiumSetting
// Dependencies: [19, 1378, 4497, 1086, 21, 12938, 4491, 1127, 558, 576, 6838, 10845, 14506, 10874, 8119, 14508, 2]

// Module 14505 (PremiumSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import PremiumUtils from "PremiumUtils" /* 4491 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 6838 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8119 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 12938 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 14506 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import SubscriptionStore from "SubscriptionStore" /* 4497 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
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
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumTabBadgeDefault, {});
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(PremiumTabBadgeDefault, {}));
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
