// Module ID: 15216
// Function ID: 15217
// Name: AuthorizedAppSetting
// Dependencies: [8270, 1078, 11630, 15217, 2]

// Module 15216 (AuthorizedAppSetting)
import Constants from "Constants" /* 1078 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APP,
    getComponent() {
      return require("AuthorizedAppScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
