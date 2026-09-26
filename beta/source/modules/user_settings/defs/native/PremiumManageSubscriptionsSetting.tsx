// Module ID: 15267
// Function ID: 15268
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1074, 7691, 11725, 4446, 13693, 11754, 1115, 15268, 15266, 2]

// Module 15267 (PremiumManageSubscriptionsSetting)
import util from "util" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4446 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7691 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11725 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11754);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(15268).SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return noop.useCallback(() => {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
