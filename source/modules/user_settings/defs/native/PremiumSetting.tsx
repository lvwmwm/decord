// Module ID: 13934
// Function ID: 106563
// Name: route
// Dependencies: [31, 1849, 3782, 653, 33, 12401, 3776, 1212, 6656, 7227, 13935, 10127, 7486, 13937, 2]

// Module 13934 (route)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = require(12401) /* apexExperiment */.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = require(12401) /* apexExperiment */;
    currentUser = currentUser.getCurrentUser();
    const result = require(3776) /* _createForOfIteratorHelperLoose */.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    if (result) {
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        let stringResult = string(_4gwVVn);
      } else {
        stringResult = string(_4gwVVn["8jmdON"]);
      }
    } else {
      return string(_4gwVVn["8x0jKT"]);
    }
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !outer1_0(outer1_2[8]).getIsPaymentsBlocked();
      if (!flag) {
        outer1_1(outer1_2[9])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(importDefault(13935), {});
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM,
  getComponent() {
    return require(13937) /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;
