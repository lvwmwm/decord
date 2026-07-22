// Module ID: 13775
// Function ID: 104102
// Name: route
// Dependencies: []

// Module 13775 (route)
let closure_3 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.z5YcJ+);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[8]).SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !callback(closure_2[2]).getIsPaymentsBlocked();
      if (!flag) {
        callback2(closure_2[3])();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = arg1(dependencyMap[4]).useHasPremiumSubscriptionToDisplay();
    const obj = arg1(dependencyMap[4]);
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[1]).UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return arg1(dependencyMap[9]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
