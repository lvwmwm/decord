// Module ID: 16200
// Function ID: 16201
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 15140, 15143, 11729, 1115, 10045, 16201, 2]

// Module 16200 (DataAndPrivacySetting)
import util from "util" /* 1115 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15140 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 15143 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(10045).ShieldLockIcon,
  screen: {
    route: fn(1074).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction() {
    return noop.useCallback(() => {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    }, []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
