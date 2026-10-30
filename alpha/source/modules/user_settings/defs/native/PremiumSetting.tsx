// Module ID: 16832
// Function ID: 16833
// Name: PremiumSetting
// Dependencies: [19, 1384, 2053, 1072, 21, 2048, 1114, 7595, 11337, 16833, 11505, 9506, 16837, 2]

// Module 16832 (PremiumSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7595 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9506 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 16833 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
