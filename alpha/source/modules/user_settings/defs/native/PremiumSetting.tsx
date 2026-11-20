// Module ID: 16158
// Function ID: 16159
// Name: PremiumSetting
// Dependencies: [19, 1386, 2177, 1071, 21, 2172, 1112, 8985, 9192, 16159, 11817, 8832, 16162, 2]

// Module 16158 (PremiumSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import PremiumUtils from "PremiumUtils" /* 2172 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8832 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 8985 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 16159 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import SubscriptionStore from "SubscriptionStore" /* 2177 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle: function getPremiumSettingTitle() {
    let stringResult;
    const hasPremiumSubscriptionToDisplay = PremiumUtils.hasPremiumSubscriptionToDisplay;
    PremiumUtils;
    const currentUser = UserStore.getCurrentUser();
    const result = hasPremiumSubscriptionToDisplay(currentUser, SubscriptionStore.getPremiumTypeSubscription());
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (result) {
      stringResult = string(t["4gwVVn"]);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    return stringResult;
  },
  parent: null,
  IconComponent: NitroWheelIcon.NitroWheelIcon,
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
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(PremiumTabBadgeDefault, {});
  },
  screen: {
    route: UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
