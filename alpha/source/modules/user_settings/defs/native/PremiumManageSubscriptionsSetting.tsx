// Module ID: 16840
// Function ID: 16841
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1072, 7595, 11337, 9650, 1114, 11505, 16841, 2048, 16839, 2]

// Module 16840 (PremiumManageSubscriptionsSetting)
import Constants from "Constants" /* 1072 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7595 */;
import MapleSyrupExperiments from "MapleSyrupExperiments" /* 9650 */;
import SubscriptionIcon from "SubscriptionIcon" /* 16841 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    let stringResult;
    const obj = MapleSyrupExperiments;
    const mapleSyrup2Treatment = obj.useMapleSyrup2Treatment("useTitle");
    if ("A" === mapleSyrup2Treatment) {
      const intl3 = tmp(1114).intl;
      stringResult = intl3.string(tmp(1114).t.XFZr3P);
    } else if ("B" === mapleSyrup2Treatment) {
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.Gl5dnA);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t["z5YcJ+"]);
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
