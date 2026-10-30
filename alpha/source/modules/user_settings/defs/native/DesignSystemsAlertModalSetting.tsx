// Module ID: 17723
// Function ID: 17724
// Name: DesignSystemsAlertModalSetting
// Dependencies: [8424, 1072, 11505, 17724, 2]

// Module 17723 (DesignSystemsAlertModalSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Alert Modal";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
