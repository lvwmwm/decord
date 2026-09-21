// Module ID: 15056
// Function ID: 15057
// Name: AccountConfirmPasswordSetting
// Dependencies: [8233, 1074, 11725, 1115, 7238, 2]

// Module 15056 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7238 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
