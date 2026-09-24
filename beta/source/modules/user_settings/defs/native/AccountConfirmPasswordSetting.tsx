// Module ID: 15054
// Function ID: 15055
// Name: AccountConfirmPasswordSetting
// Dependencies: [8270, 1078, 11630, 1119, 7271, 2]

// Module 15054 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7271 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7qKDrE"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
    getComponent() {
      return UserSettingsConfirmPassword.UserSettingsConfirmPasswordWrapped;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
