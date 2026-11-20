// Module ID: 16165
// Function ID: 16166
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1071, 8985, 9192, 9827, 1112, 11817, 16166, 2172, 16164, 2]

// Module 16165 (PremiumManageSubscriptionsSetting)
import Constants from "Constants" /* 1071 */;
import PremiumUtils from "PremiumUtils" /* 2172 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 8985 */;
import MapleSyrupExperiments from "MapleSyrupExperiments" /* 9827 */;
import SubscriptionIcon from "SubscriptionIcon" /* 16166 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    let stringResult;
    const obj = MapleSyrupExperiments;
    const mapleSyrup2Treatment = obj.useMapleSyrup2Treatment("useTitle");
    if ("A" === mapleSyrup2Treatment) {
      const intl3 = tmp(1112).intl;
      stringResult = intl3.string(tmp(1112).t.XFZr3P);
    } else if ("B" === mapleSyrup2Treatment) {
      const intl2 = tmp(1112).intl;
      stringResult = intl2.string(tmp(1112).t.Gl5dnA);
    } else {
      const intl = tmp(1112).intl;
      stringResult = intl.string(tmp(1112).t["z5YcJ+"]);
    }
    return stringResult;
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
  usePredicate: PremiumUtils.useHasPremiumSubscriptionToDisplay,
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
