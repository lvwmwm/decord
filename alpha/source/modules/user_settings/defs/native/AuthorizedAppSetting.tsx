// Module ID: 17105
// Function ID: 17106
// Name: AuthorizedAppSetting
// Dependencies: [8573, 1072, 11729, 17106, 2]

// Module 17105 (AuthorizedAppSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
