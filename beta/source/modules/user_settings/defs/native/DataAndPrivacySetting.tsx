// Module ID: 16192
// Function ID: 16193
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 15136, 15139, 11754, 1115, 10078, 16193, 2]

// Module 16192 (DataAndPrivacySetting)
import util from "util" /* 1115 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15136 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 15139 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11754);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(10078).ShieldLockIcon,
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
