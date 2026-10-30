// Module ID: 17850
// Function ID: 17851
// Name: DataAndPrivacySetting
// Dependencies: [19, 1072, 16704, 16707, 11505, 1114, 14697, 17851, 2]

// Module 17850 (DataAndPrivacySetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import ShieldLockIcon from "ShieldLockIcon" /* 14697 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16704 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 16707 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
