// Module ID: 18049
// Function ID: 18050
// Name: DataAndPrivacySetting
// Dependencies: [19, 1072, 16902, 16905, 11677, 1113, 14870, 18050, 2]

// Module 18049 (DataAndPrivacySetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ShieldLockIcon from "ShieldLockIcon" /* 14870 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16902 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 16905 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.OAuOHD);
  },
  parent: null,
  IconComponent: ShieldLockIcon.ShieldLockIcon,
  screen: {
    route: UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction() {
    return react.useCallback(() => {
      const obj = ConsentActionCreators;
      const consents = obj.fetchConsents();
      const obj2 = RequestYourDataSetting;
      const harvestStatus = obj2.fetchHarvestStatus();
      return true;
    }, []);
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
