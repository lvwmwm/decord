// Module ID: 14141
// Function ID: 14142
// Name: route
// Dependencies: [19, 1903, 3936, 676, 21, 12603, 3930, 1236, 6802, 7366, 14142, 10364, 7625, 14144, 2]

// Module 14141 (route)
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = require(12603) /* apexExperiment */.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = require(12603) /* apexExperiment */;
    currentUser = currentUser.getCurrentUser();
    const result = require(3930) /* getPremiumPlanItem */.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = require(1236) /* getSystemLocale */.intl;
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
      const isPaymentsBlocked = callback(table[8]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[9])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(importDefault(14142), {});
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM,
  getComponent() {
    return require(14144) /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("reset").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;
