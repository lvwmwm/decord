// Module ID: 16310
// Function ID: 16311
// Name: AccountConfirmPasswordSetting
// Dependencies: [8365, 1084, 11248, 1125, 7125, 2]

// Module 16310 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7qKDrE"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
    getComponent() {
      return UserSettingsConfirmPassword.UserSettingsConfirmPasswordWrapped;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
