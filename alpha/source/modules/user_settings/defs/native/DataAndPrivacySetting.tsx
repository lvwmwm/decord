// Module ID: 17398
// Function ID: 17399
// Name: DataAndPrivacySetting
// Dependencies: [19, 1071, 16190, 16193, 11815, 1112, 14142, 17399, 2]

// Module 17398 (DataAndPrivacySetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ShieldLockIcon from "ShieldLockIcon" /* 14142 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16190 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 16193 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
