// Module ID: 17368
// Function ID: 17369
// Name: DataAndPrivacySetting
// Dependencies: [19, 1071, 16165, 16168, 11942, 1112, 13820, 17369, 2]

// Module 17368 (DataAndPrivacySetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ShieldLockIcon from "ShieldLockIcon" /* 13820 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16165 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 16168 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
