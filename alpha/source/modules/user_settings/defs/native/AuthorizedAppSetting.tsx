// Module ID: 17522
// Function ID: 17523
// Name: AuthorizedAppSetting
// Dependencies: [9213, 1072, 12612, 17523, 2]

// Module 17522 (AuthorizedAppSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
