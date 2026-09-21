// Module ID: 15045
// Function ID: 15046
// Name: AccountConfirmPasswordSetting
// Dependencies: [8238, 1078, 11594, 1119, 7239, 2]

// Module 15045 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7239 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
