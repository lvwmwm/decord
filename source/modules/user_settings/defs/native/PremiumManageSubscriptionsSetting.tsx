// Module ID: 13940
// Function ID: 106582
// Name: route
// Dependencies: [31, 653, 6656, 7227, 3776, 12401, 10127, 1212, 13941, 13939, 2]

// Module 13940 (route)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: require("SubscriptionIcon").SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !outer1_0(outer1_2[2]).getIsPaymentsBlocked();
      if (!flag) {
        outer1_1(outer1_2[3])();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = require(3776) /* _createForOfIteratorHelperLoose */.useHasPremiumSubscriptionToDisplay();
    const obj = require(3776) /* _createForOfIteratorHelperLoose */;
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
    return require(13939) /* PremiumPlanSelectSettingScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("items").fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default createToggle;
