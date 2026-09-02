// Module ID: 14809
// Function ID: 14810
// Name: route
// Dependencies: [19, 1921, 4145, 673, 21, 13297, 4139, 1233, 7171, 8493, 14810, 11288, 8104, 14812, 2]

// Module 14809 (route)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import apexExperiment from "apexExperiment" /* 13297 */;
import ThemedTabBadgeDefault from "ThemedTabBadge" /* 14810 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "reset" /* 4145 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = apexExperiment.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = apexExperiment;
    currentUser = currentUser.getCurrentUser();
    const result = getPremiumPlanItem.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = getSystemLocale.intl;
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
    return jsx(ThemedTabBadgeDefault, {});
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM,
  getComponent() {
    return require(14812) /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;
