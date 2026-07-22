// Module ID: 13769
// Function ID: 104083
// Name: route
// Dependencies: []

// Module 13769 (route)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[11]);
obj = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = arg1(dependencyMap[5]).getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = arg1(dependencyMap[5]);
    const currentUser = currentUser.getCurrentUser();
    const result = arg1(dependencyMap[6]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = arg1(dependencyMap[7]).intl;
    const string = intl.string;
    if (result) {
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        let stringResult = string(_4gwVVn);
      } else {
        stringResult = string(_4gwVVn.8jmdON);
      }
    } else {
      return string(_4gwVVn.8x0jKT);
    }
  },
  parent: null,
  IconComponent: arg1(dependencyMap[12]).NitroWheelIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !callback(closure_2[8]).getIsPaymentsBlocked();
      if (!flag) {
        callback2(closure_2[9])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(importDefault(dependencyMap[10]), {});
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[3]).UserSettingsSections.PREMIUM,
  getComponent() {
    return arg1(dependencyMap[13]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
