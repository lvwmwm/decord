// Module ID: 17398
// Function ID: 17399
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1072, 9519, 9722, 10444, 1113, 12317, 17399, 2171, 17397, 2]

// Module 17398 (PremiumManageSubscriptionsSetting)
import Constants from "Constants" /* 1072 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 9519 */;
import MapleSyrupExperiments from "MapleSyrupExperiments" /* 10444 */;
import SubscriptionIcon from "SubscriptionIcon" /* 17399 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    let stringResult;
    const obj = MapleSyrupExperiments;
    const mapleSyrup2Treatment = obj.useMapleSyrup2Treatment("useTitle");
    if ("A" === mapleSyrup2Treatment) {
      const intl3 = tmp(1113).intl;
      stringResult = intl3.string(tmp(1113).t.XFZr3P);
    } else if ("B" === mapleSyrup2Treatment) {
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(tmp(1113).t.Gl5dnA);
    } else {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t["z5YcJ+"]);
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
