// Module ID: 14523
// Function ID: 14524
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1074, 6837, 10977, 4488, 12936, 11006, 1115, 14524, 14522, 2]

// Module 14523 (PremiumManageSubscriptionsSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 6837 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 12936 */;
import SubscriptionIcon from "SubscriptionIcon" /* 14524 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: SubscriptionIcon.SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
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
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    const obj = PremiumUtils;
    let hasPremiumSubscriptionToDisplay = obj.useHasPremiumSubscriptionToDisplay();
    const obj2 = MobileNitroManageSubscriptionsSettingsExperiment;
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
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
