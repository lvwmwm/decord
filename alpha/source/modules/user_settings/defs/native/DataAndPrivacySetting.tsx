// Module ID: 18438
// Function ID: 18439
// Name: DataAndPrivacySetting
// Dependencies: [19, 1072, 17267, 17270, 12317, 1113, 10752, 18439, 2]

// Module 18438 (DataAndPrivacySetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ShieldLockIcon from "ShieldLockIcon" /* 10752 */;
import ConsentActionCreators from "ConsentActionCreators" /* 17267 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 17270 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
