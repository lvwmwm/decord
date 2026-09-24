// Module ID: 15257
// Function ID: 15258
// Name: PremiumSetting
// Dependencies: [19, 1376, 4456, 1078, 21, 13703, 4450, 1119, 558, 568, 7693, 11601, 15258, 11630, 8970, 15260, 2]

// Module 15257 (PremiumSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7693 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11601 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 13703 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 15258 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import SubscriptionStore from "SubscriptionStore" /* 4456 */;

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
const SettingBuilders = fn(11630);
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
  IconComponent: fn(8970).NitroWheelIcon,
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
