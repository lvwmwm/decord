// Module ID: 14017
// Function ID: 14018
// Name: route
// Dependencies: [19, 676, 6291, 6356, 3835, 12444, 10120, 1236, 14018, 14016, 2]

// Module 14017 (route)
import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: require("SubscriptionIcon").SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      const isPaymentsBlocked = callback(table[2]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[3])();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = require(3835) /* getPremiumPlanItem */.useHasPremiumSubscriptionToDisplay();
    const obj = require(3835) /* getPremiumPlanItem */;
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(14016) /* PremiumPlanSelectSettingScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("useBlockedPaymentsConfig").fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default createToggle;
