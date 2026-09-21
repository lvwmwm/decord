// Module ID: 16189
// Function ID: 16190
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 15133, 15136, 11725, 1115, 10039, 16190, 2]

// Module 16189 (DataAndPrivacySetting)
import util from "util" /* 1115 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15133 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 15136 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11725);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(10039).ShieldLockIcon,
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
