// Module ID: 17117
// Function ID: 17118
// Name: AuthorizedAppSetting
// Dependencies: [8524, 1072, 11703, 17118, 2]

// Module 17117 (AuthorizedAppSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "";
  },
  parent: MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.AUTHORIZED_APP,
    getComponent() {
      return require("AuthorizedAppScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
