// Module ID: 15247
// Function ID: 15248
// Name: PremiumSetting
// Dependencies: [19, 1376, 4424, 1078, 21, 13667, 4418, 1119, 558, 568, 7661, 11565, 15248, 11594, 8938, 15250, 2]

// Module 15247 (PremiumSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PremiumUtils from "PremiumUtils" /* 4418 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7661 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11565 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 13667 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 15248 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import SubscriptionStore from "SubscriptionStore" /* 4424 */;

require = fn;
const jsx = fn(21).jsx;
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
const SettingBuilders = fn(11594);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumTabBadgeDefault, {});
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(PremiumTabBadgeDefault, {}));
const route = SettingBuilders.createRoute({
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = MobileNitroManageSubscriptionsSettingsExperiment.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const currentUser = UserStore.getCurrentUser();
    const result = PremiumUtils.hasPremiumSubscriptionToDisplay(currentUser, SubscriptionStore.getPremiumTypeSubscription());
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (result) {
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        t = t["4gwVVn"];
        let stringResult = string(t);
      } else {
        stringResult = string(t["8jmdON"]);
      }
    } else {
      return string(t["8x0jKT"]);
    }
  },
  parent: null,
  IconComponent: fn(8938).NitroWheelIcon,
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp6 = jsx(PremiumTabBadgeDefault, {});
      cResult[0] = tmp6;
      let first = tmp6;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => jsx(PremiumTabBadgeDefault, {})),
  screen: {
    route: fn(1078).UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
