// Module ID: 15481
// Function ID: 15482
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 14391, 14394, 11006, 1115, 9238, 15482, 2]

// Module 15481 (DataAndPrivacySetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9238 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14391 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14394 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
